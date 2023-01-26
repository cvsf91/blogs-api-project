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

route.get(
  '/:id',
  verifyToken,
  getUserById,
);

route.delete(
  '/me',
  verifyToken,
  deleteUser,
);

module.exports = route;