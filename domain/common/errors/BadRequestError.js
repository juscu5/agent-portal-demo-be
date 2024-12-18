const BaseError = require('./BaseError');

module.exports = class BadRequestError extends BaseError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
};
