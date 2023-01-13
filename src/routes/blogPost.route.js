const express = require('express');
const verifyToken = require('../middlewares/jwt/verifyToken');
const {
  categoryIdsValidation,
  fieldsCreateValidation,
  validateDelete,
  fieldsEditValidation,
  validatePostEdit,
} = require('../middlewares/blogPostValidations');
const {
  createPost,
  deletePost,
  getPosts,
  getPostById,
  updatePost,
} = require('../controllers/blogPost.controller');

const route = express.Router();

route.put(
  '/:id',
  verifyToken,
  fieldsEditValidation,
  validatePostEdit,
  updatePost,
);

route.post(
  '/',
  verifyToken,
  fieldsCreateValidation,
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