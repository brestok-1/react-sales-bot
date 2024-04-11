const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://brestok-sales-bot-backend.hf.space',
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
