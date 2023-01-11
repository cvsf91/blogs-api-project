const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const { User } = require('../models');

const loginUser = async (email, password) => {
  const [result] = await User.findAll({
    where: {
      email,
      password,
    },
  });
  return result;
};

const createUser = async ({ displayName, email, password, image }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const user = User.create({ displayName, email, password, image },
        { transaction: t });
      return user;
    });
    return result;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  createUser,
  loginUser,
};