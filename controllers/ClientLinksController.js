const errorResponseHelper = require('./common/ErrorResponseHelper');
const createClientLinkUseCase = require('../domain/usecases/client-links/Create.UseCase');
const updateClientLinkUseCase = require('../domain/usecases/client-links/Update.UseCase');
const getByIdClientLinkUseCase = require('../domain/usecases/client-links/GetByID.UseCase');
const getAllClientLinkUseCase = require('../domain/usecases/client-links/GetAll.UseCase');
const deleteClientLinkUseCase = require('../domain/usecases/client-links/Delete.UseCase');

const createClientLinks = async (req, res) => {
  try {
    const result = await createClientLinkUseCase(req?.body);
    return res.status(201).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

const updateClientLinks = async (req, res) => {
  try {
    const result = await updateClientLinkUseCase(req?.body);
    return res.status(200).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

const deleteClientLinks = async (req, res) => {
  try {
    const { linkId } = req.body;
    const result = await deleteClientLinkUseCase(linkId);
    return res.status(200).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

const getClientLinks = async (req, res) => {
  try {
    const result = await getAllClientLinkUseCase();
    return res.status(200).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

const getClientLinksById = async (req, res) => {
  try {
    const result = await getByIdClientLinkUseCase(req?.body);
    return res.status(200).send(result);
  } catch (e) {
    return errorResponseHelper(e, res);
  }
};

module.exports = {
  createClientLinks,
  updateClientLinks,
  deleteClientLinks,
  getClientLinks,
  getClientLinksById,
};
