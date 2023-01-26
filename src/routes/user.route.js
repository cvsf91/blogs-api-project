const express = require('express');
const { createUser, getUsers, getUserById, deleteUser } = require('../controllers/user.controller');
const { name, email, password, userExistence } = require('../middlewares/userValidations');
const verifyToken = require('../middlewares/jwt/verifyToken');

const route = express.Router();

route.post(
  '/',
  name,
  email,
  password,
  userExistence,
  createUser,
);
  
route.get(
  '/',
  verifyToken,
  getUsers,
);

route.delete(
  '/me',
  verifyToken,
  deleteUser,
);

route.get(
  '/:id',
  verifyToken,
  getUserById,
);

module.exports = route;