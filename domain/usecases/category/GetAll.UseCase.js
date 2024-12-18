const { getAllCategory } = require('../../../data/repositories/Category.DAL');

module.exports = async () => {
  const result = await getAllCategory();
  return result;
};
