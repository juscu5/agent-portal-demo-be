const errorResponseHelper = require('./common/ErrorResponseHelper');
const createCategoryUseCase = require('../domain/usecases/category/Create.UseCase');
const getAllCategoryUseCase = require('../domain/usecases/category/GetAll.UseCase');
const updateCategoryUseCase = require('../domain/usecases/category/Update.UseCase');

const createCategory = async (req, res) => {
  try {
    const result = await createCategoryUseCase(req?.body);
    return res.status(201).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const result = await getAllCategoryUseCase();
    return res.status(200).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

const putCategory = async (req, res) => {
  try {
    const result = await updateCategoryUseCase(req?.body);
    return res.status(200).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  putCategory,
};
