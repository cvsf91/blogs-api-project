const express = require('express');
const { createCategory } = require('../controllers/category.controller');
const verifyToken = require('../middlewares/jwt/verifyToken');

const route = express.Router();

route.post('/', verifyToken, createCategory);

module.exports = route;