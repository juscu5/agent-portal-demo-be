const { getClientLinksById } = require('../../../data/repositories/ClientLink.DAL');

module.exports = async (clientLinkIds) => {
  const { clientId, companyId } = clientLinkIds;
  const result = await getClientLinksById(clientId, companyId);
  return result;
};
