const service = require('../services/blogPost.service');

const createPost = async (req, res) => {
  const { email } = req.token.data;
  const post = await service.createPost(req.body, email);
  return res.status(201).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await service.deletePost(id);
    return res.send(204);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPost,
  deletePost,
};