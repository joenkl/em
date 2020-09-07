// references: https://github.com/facebook/create-react-app/issues/5103
// we cannot use ES6 syntax in this file according to the references
const proxy = require('http-proxy-middleware');

// TODO: using config/ configure for localhost using following docs: https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
// TODO: figure it out about the secure: false
module.exports = (app) => {
  app.use(proxy('/em/api/', { target: `https://localhost:${process.env.SERVER_PORT || 5000}/`, secure: false }));
};
