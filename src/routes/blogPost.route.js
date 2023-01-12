const express = require('express');
const verifyToken = require('../middlewares/jwt/verifyToken');
const {
  categoryIdsValidation,
  fieldsValidation,
  validateDelete,
} = require('../middlewares/blogPostValidations');
const { createPost, deletePost } = require('../controllers/blogPost.controller');

const route = express.Router();

route.post(
  '/',
  verifyToken,
  fieldsValidation,
  categoryIdsValidation,
  createPost,
);

route.delete(
  '/:id',
  verifyToken,
  validateDelete,
  deletePost,
);

module.exports = route;