const express = require('express');
const { createCategory, getCategories } = require('../controllers/category.controller');
const verifyToken = require('../middlewares/jwt/verifyToken');

const route = express.Router();

route.post('/', verifyToken, createCategory);

route.get('/', verifyToken, getCategories);

module.exports = route;