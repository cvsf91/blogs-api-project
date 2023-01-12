const express = require('express');
const verifyToken = require('../middlewares/jwt/verifyToken');
const {
  categoryIdsValidation,
  fieldsValidation,
} = require('../middlewares/blogPostValidations');
const { createPost } = require('../controllers/blogPost.controller');

const route = express.Router();

route.post(
  '/',
  verifyToken,
  fieldsValidation,
  categoryIdsValidation,
  createPost,
);

module.exports = route;