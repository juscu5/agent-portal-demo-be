const Joi = require('joi');
const { v4: newGuid } = require('uuid');
const { BadRequestError } = require('../../common/errors');
const { InternalServerError } = require('../../common/errors');
const { createCategoryDAL, getCategoryByName } = require('../../../data/repositories/Category.DAL');

// schema options
const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
};

// validation format base on users input
const validationSchema = Joi.object({
  categoryName: Joi.string().required().max(80),
});

module.exports = async (category) => {
  const validationResult = validationSchema.validate(category, options);
  const errors = validationResult?.error?.details; // response error details of validation
  if (errors) {
    throw new BadRequestError(errors); // returning an error and response the error details
  }

  // validation for duplication of category name
  const validateExist = await getCategoryByName(category?.categoryName);
  if (validateExist.length !== 0) {
    // returning an error and response the error details
    throw new BadRequestError([{
      message: 'Category name is already exist',
      path: ['categoryName'],
      type: 'string.existing',
      context: { label: '', value: '', key: '' },
    }]);
  }

  try {
    const uuid = newGuid();
    const data = {
      category_id: uuid,
      category_name: category?.categoryName,
      status: true,
    };
    await createCategoryDAL(data);
    return data;
  } catch (err) {
    throw new InternalServerError(err);
  }
};
