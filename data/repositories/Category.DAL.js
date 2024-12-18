const db = require('../../db');

const createCategoryDAL = async (category) => {
  // inserting on database using json data {category_name : "",status : true}
  await db('category_list').insert(category);
};

const getAllCategory = async () => {
  const result = await db('category_list').select('*').where('status', true);
  return result;
};

const getCategoryByName = async (categoryName) => {
  const result = await db('category_list').select('*').where({
    category_name: categoryName,
    status: true,
  });
  return result;
};

const updateCategoryByID = async (category) => { 
  const { categoryId, categoryName, status } = category;
  const result = await db('category_list').where({ category_id : categoryId }).update({
    category_name: categoryName,
  });
  return result;
};

module.exports = {
  createCategoryDAL,
  getCategoryByName,
  getAllCategory,
  updateCategoryByID,
};
