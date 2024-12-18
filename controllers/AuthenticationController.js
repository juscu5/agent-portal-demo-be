const errorResponseHelper = require('./common/ErrorResponseHelper');
const ccmsAuthentication = require('../domain/usecases/authentication/ccmsAuthentication')

const login = async (req, res) => {
  try {
    const result = await ccmsAuthentication(req?.body);
    return res.status(200).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
}

module.exports = {
    login,
}