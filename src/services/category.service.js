const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const { Category } = require('../models');

const createCategory = async (name) => {
  const result = await sequelize.transaction(async (t) => {
    const category = Category.create({ name },
      { transaction: t });
    return category;
  });
  return result;
};

const getCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = { createCategory, getCategories };