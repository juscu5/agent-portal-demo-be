const { getAllClientLinks } = require('../../../data/repositories/ClientLink.DAL');

module.exports = async () => {
  const result = await getAllClientLinks();
  return result;
};
