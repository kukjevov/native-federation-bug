var fs = require('fs'),
    path = require('path');

function includeEnvMock(app)
{
    var envMock = path.join(__dirname, `server.mock.${process.env.NODE_ENV}.cjs`);

    if(process.env.NODE_ENV && fs.existsSync(envMock))
    {
        console.log(`Loading mocks for '${envMock}' env.`);

        require(envMock)(app);
    }
}

module.exports = function(app)
{
    //uses environment specific mocks
    includeEnvMock(app);

    //LOAD LOGGER RESOURCE
    require('./mocks/logger/index.cjs')(app);

    //LOAD MOCK LOGGER RESOURCE
    require('./mocks/mockLogger/index.cjs')(app);

    //DYNAMIC CONTENT
    require('./mocks/dynamicContent/index.cjs')(app);
};
