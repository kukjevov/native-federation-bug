module.exports = function(app)
{
    //GET DYNAMIC CONTENT
    app.useMock('GET', /api\/dynamicContent\/(.*?)$/, (_, matches) =>
    {
        return `mocks/dynamicContent/${matches[1]}.json`;
    });

    //SET DYNAMIC CONTENT
    app.useMock('POST', /api\/dynamicContent\/(.*?)$/, () =>
    {
        return {
            emptyResult: true,
            statusCode: 200,
        };
    });
}