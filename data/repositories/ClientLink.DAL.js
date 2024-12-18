const moment = require('moment');
const db = require('../../db');

const getAllClientLinks = async () => {
  const result = await db('links_table').select('*').where({
    status: true,
  });

  return result;
};

const getClientLinksById = async (clientId, companyId) => {
  const result = await db('links_table').select('*').where({
    client_ref: clientId,
    company_ref: companyId,
  });
  return result;
};

const createClientLink = async (clientLinks) => {
  const result = await db('links_table').insert(clientLinks);
  return result;
};

const updateClientLink = async (clientLinks) => {
  const result = await db('links_table').where({
    link_id: clientLinks?.linkId,
  }).update({
    link_desc: clientLinks?.linkDesc,
    platform_name: clientLinks?.platFormName,
    updated_at: moment.utc().format(),
    status: clientLinks?.status,
  });
  return result;
};

const deleteClientLink = async (linkId) => {
  const result = await db('links_table').where({
    link_id: linkId,
  }).del();
  return result;
};

module.exports = {
  getAllClientLinks,
  getClientLinksById,
  updateClientLink,
  createClientLink,
  deleteClientLink,
};
