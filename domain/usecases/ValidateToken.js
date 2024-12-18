const {
  UnauthorizedError,
} = require('../common/errors');

module.exports = async (token) => {
  if (!token) throw new UnauthorizedError();
};
