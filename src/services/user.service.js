const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const { User } = require('../models');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

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

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const getUserByEmail = async (email) => {
  const [user] = await User.findAll({ where: { email } });
  return user;
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  getUserById,
  getUserByEmail,
};