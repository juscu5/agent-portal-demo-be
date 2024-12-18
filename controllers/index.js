const categoryController = require('./CategoryController');
const clientLinksController = require('./ClientLinksController');
const authenticationController = require('./authenticationController');

module.exports = {
  ...categoryController,
  ...clientLinksController,
  ...authenticationController,
};
