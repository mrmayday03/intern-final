const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rfidhttpfunc.azurewebsites.net',
      changeOrigin: true,
    })
  );
};
