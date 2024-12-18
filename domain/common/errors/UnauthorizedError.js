const BaseError = require('./BaseError');

module.exports = class UnauthorizedError extends BaseError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
};
