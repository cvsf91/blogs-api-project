const { User } = require('../models');

const Sequelize = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createUser = async ({ email, password }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const user = User.create({ email, password },
        { transaction: t });
      return user;
    });
    return result;
  } catch (error) {
    console.log(error.message);
    throw error
  }
};

module.exports = {
  createUser,
}