const service = require('../services/blogPost.service');

const createPost = async (req, res) => {
  const { email } = req.token.data;
  const post = await service.createPost(req.body, email);
  return res.status(201).json(post);
};

module.exports = {
  createPost,
};