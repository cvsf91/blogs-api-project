const service = require('../services/category.service');

const getCategories = async (_req, res) => {
  try {
    const categories = await service.getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500);
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  try {
    const result = await service.createCategory(name);
    return res.status(201).json(result.dataValues);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCategory,
  getCategories,
};