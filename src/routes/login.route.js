const express = require('express');

const { loginUser } = require('../controllers/user.controller');

const route = express.Router();

route.post('/', loginUser);

module.exports = route;