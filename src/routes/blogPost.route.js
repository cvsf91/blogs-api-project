const express = require('express');
const verifyToken = require('../middlewares/jwt/verifyToken');
const {
  categoryIdsValidation,
  fieldsValidation,
  validateDelete,
} = require('../middlewares/blogPostValidations');
const {
  createPost,
  deletePost,
  getPosts,
  getPostById,
} = require('../controllers/blogPost.controller');

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

route.get(
  '/',
  verifyToken,
  getPosts,
);

route.get(
  '/:id',
  verifyToken,
  getPostById,
);

module.exports = route;