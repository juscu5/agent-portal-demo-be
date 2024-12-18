require('dotenv').config();

const postCategory = require('./category/create.swagger');
const getCategory = require('./category/get.swagger');
const updateCategory = require('./category/update.swagger');
const getClientLinksSwagger = require('./client-links/get.swagger');
const createClientLinksSwagger = require('./client-links/create.swagger');
const updateClientLinksSwagger = require('./client-links/update.swagger');
const authenticationCCMSSwagger = require('./authentication/login');

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: process.env.VERSION,
    title: 'API Documentation',
  },
  paths: {
    '/category/create': {
      post: postCategory,
    },
    '/category': {
      get: getCategory,
    },
    '/category/update': {
      put: updateCategory,
    },
    '/client-link': {
      get: getClientLinksSwagger,
    },
    '/client-link/create': {
      post: createClientLinksSwagger,
    },
    '/client-link/update': {
      put: updateClientLinksSwagger,
    },
    '/authentication/ccms': {
      post: authenticationCCMSSwagger,
    },
  },
};

module.exports = {
  swaggerDocument,
};
