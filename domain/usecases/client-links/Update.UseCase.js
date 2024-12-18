const Joi = require('joi');
const moment = require('moment');
const { BadRequestError } = require('../../common/errors');
const { InternalServerError } = require('../../common/errors');
const { updateClientLink } = require('../../../data/repositories/ClientLink.DAL');

// schema options
const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
};

// validation format base on users input
const validationSchema = Joi.object({
  linkId: Joi.string().required(),
  categoryRef: Joi.string().required(),
  clientRef: Joi.string().required(),
  companyRef: Joi.string().required(),
  linkDesc: Joi.string().max(255),
  platFormName: Joi.string().max(255),
});

module.exports = async (clientLinks) => {
  const validationResult = validationSchema.validate(clientLinks, options);
  const errors = validationResult?.error?.details; // response error details of validation
  if (errors) {
    throw new BadRequestError(errors); // returning an error and response the error details
  }

  try {
    const dataToInsert = {
      link_id: clientLinks?.linkId,
      category_ref: clientLinks?.categoryRef,
      client_ref: clientLinks?.clientRef,
      company_ref: clientLinks?.companyRef,
      link_desc: clientLinks?.linkDesc,
      platform_name: clientLinks?.platFormName,
      created_at: moment.utc().format(),
      updated_at: moment.utc().format(),
      delete_at: moment.utc().format(),
      status: true,
    };
    await updateClientLink(dataToInsert);
  } catch (err) {
    throw new InternalServerError(err);
  }
};
