const BaseError = require('./BaseError');

module.exports = class InternalServerError extends BaseError {
  constructor(message = 'Internal Server') {
    super(message, 500);
  }
};
