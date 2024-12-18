const Joi = require('joi');
const { v4: newGuid } = require('uuid');
const moment = require('moment');
const { BadRequestError } = require('../../common/errors');
const { InternalServerError } = require('../../common/errors');
const { createClientLink } = require('../../../data/repositories/ClientLink.DAL');

// schema options
const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
};

// validation format base on users input
const validationSchema = Joi.object({
  categoryRef: Joi.string().required(),
  clientRef: Joi.string().required(),
  companyRef: Joi.string().required(),
  linkDesc: Joi.string().max(255),
  platFormName: Joi.string().max(255),
});

module.exports = async (clientLinks) => {
  clientLinks?.forEach((element) => {
    const validationResult = validationSchema.validate(element, options);
    const errors = validationResult?.error?.details; // response error details of validation
    if (errors) {
      throw new BadRequestError(errors); // returning an error and response the error details
    }
  });

  try {
    const dataToInsert = [];
    clientLinks?.forEach((obj) => {
      dataToInsert.push({
        link_id: newGuid(),
        category_ref: obj?.categoryRef,
        client_ref: obj?.clientRef,
        company_ref: obj?.companyRef,
        link_desc: obj?.linkDesc,
        platform_name: obj?.platFormName,
        created_at: moment.utc().format(),
        updated_at: moment.utc().format(),
        delete_at: moment.utc().format(),
        status: true,
      });
    });
    if (dataToInsert !== []) {
      await createClientLink(dataToInsert);
    }
    return dataToInsert;
  } catch (err) {
    throw new InternalServerError(err);
  }
};
