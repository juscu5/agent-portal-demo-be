const Joi = require('joi');
const authenticationDAL = require('../../../data/services/Authentication.DAL');


// schema options
const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };
  
  // validation format base on users input
  const validationSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });


module.exports = async (credentials) => {
    const validationResult = validationSchema.validate(credentials, options);
    const errors = validationResult?.error?.details; // response error details of validation
    if (errors) {
      throw new BadRequestError(errors); // returning an error and response the error details
    } 
    return await authenticationDAL.ccmsAuthentication(credentials);

}