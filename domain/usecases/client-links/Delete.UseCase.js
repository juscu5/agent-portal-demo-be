const { deleteClientLink } = require('../../../data/repositories/ClientLink.DAL');

module.exports = async (linkId) => {
  const result = await deleteClientLink(linkId);
  return result;
};
