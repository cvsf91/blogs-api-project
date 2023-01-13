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

const getPosts = async (_req, res) => {
  const posts = await service.getPosts();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  deletePost,
  getPosts,
};