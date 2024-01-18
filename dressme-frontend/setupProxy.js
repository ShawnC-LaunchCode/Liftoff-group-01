// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/localhost:8080', // Specify the base URL of your Spring Boot backend
    createProxyMiddleware({
      target: 'http://localhost:8080', // Replace with your Spring Boot backend URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix when forwarding requests to the backend
      },
    })
  );
};
