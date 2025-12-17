import express from 'express';
import compression from 'compression';
import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';
import path from 'path';
import fs from 'fs';
import {createProxyMiddleware} from 'http-proxy-middleware';
import yargs from 'yargs/yargs';
import {hideBin} from 'yargs/helpers';
import {extendConnectUse} from 'nodejs-connect-extensions';
import dotenv from 'dotenv';

import serverMock from './server.mock.cjs';

const consoleLog = console.log;
const consoleError = console.error;
const consoleWarn = console.warn;
const logs = [];

console.log = (message, ...optionalParams) =>
{
    logs.push(JSON.stringify(message) + ', ' + optionalParams.map(itm => JSON.stringify(itm)).join(', '));
    consoleLog(message, ...optionalParams);
};

console.error = (message, ...optionalParams) =>
{
    logs.push('ERROR: ' + JSON.stringify(message) + ', ' + optionalParams.map(itm => JSON.stringify(itm)).join(', '));
    consoleError(message, ...optionalParams);
};

console.warn = (message, ...optionalParams) =>
{
    logs.push('WARNING: ' + JSON.stringify(message) + ', ' + optionalParams.map(itm => JSON.stringify(itm)).join(', '));
    consoleWarn(message, ...optionalParams);
};

async function run()
{
    const argv = yargs(hideBin(process.argv)).argv;
    const server = express();

    server.use(compression());

    dotenv.config();

    extendConnectUse(server);

    const dirName = dirname(fileURLToPath(import.meta.url));
    const wwwroot = path.join(dirName, 'wwwroot', 'browser');
    const indexHtml = path.join(wwwroot, 'index.html');
    const proxyUrlFile = path.join(dirName, 'proxyUrl.js');
    let proxyUrl = 'http://127.0.0.1:5000';
    let port = process.env['PORT'] || 8888;

    if(fs.existsSync(proxyUrlFile))
    {
        proxyUrl = (await import('./proxyUrl.js')).default;
    }

    if(process.env.SERVER_PROXY_HOST)
    {
        proxyUrl = process.env.SERVER_PROXY_HOST;
    }

    console.log(`Using proxy url '${proxyUrl}'`);

    //start with dev port
    if(!!argv.devPort)
    {
        port = 8880;
    }

    server.get('/consoleLog', (_, res) => res.send(logs));

    //mock rest api
    serverMock(server);

    function error(err, req, res)
    {
        console.log(err, req.path, req.host, req.method);

        if(err.code == 'ECONNREFUSED' || err.code == 'ECONNRESET')
        {
            res.writeHead?.(503,
            {
                'Content-Type': 'text/plain',
            });

            res.end('Remote server is offline.');

            return;
        }

        res.writeHead?.(504,
        {
            'Content-Type': 'text/plain'
        });

        res.end('Failed to proxy request.');
    }

    //proxy special requests to other location
    server.use(createProxyMiddleware({
                                         pathFilter: ['/api', '/scalar', '/api-docs', '/swagger', '/openapi'],
                                         target: proxyUrl,
                                         ws: true,
                                         secure: false,
                                         changeOrigin: true,
                                         on:
                                         {
                                             error,
                                         },
                                     }));

    server.set('view engine', 'html');
    server.set('views', wwwroot);

    // Serve static files from /browser
    server.get('*.*', express.static(wwwroot,
    {
        maxAge: '1y',
        setHeaders: (res, path) =>
        {
            if(express.static.mime.lookup(path) === 'text/html' ||
               express.static.mime.lookup(path) === 'image/svg+xml' ||
               path.indexOf('configBrowserOverride') >= 0)
            {
                // Skip cache on html to load new builds.
                res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
                res.setHeader('Expires', '-1');
                res.setHeader('Pragma', 'no-cache');
            }
        }
    }));

    server.get('/*', (_, res) =>
    {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Expires', '-1');
        res.setHeader('Pragma', 'no-cache');

        return res.sendFile(indexHtml);
   });

    //create node.js http server and listen on port
    const runningServer = server.listen(port, () =>
    {
        console.log(`Listening on port ${port} => http://localhost:${port}`);
    });

    process.on('SIGINT', shutdown);

    // Do graceful shutdown
    function shutdown()
    {
        console.log('Shutting down server!');

        runningServer.close(() =>
        {
            console.log('Server has stopped, closing application');
            process.exit();
        });
    }
}

run();
