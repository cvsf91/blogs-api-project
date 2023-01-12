const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { BlogPost, PostCategory, User } = require('../models');

const createPost = async ({ title, content, categoryIds }, email) => {
  const [id1, id2] = categoryIds;
  const [{ id }] = await User.findAll({ where: { email } });
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({ title, content, userId: id }, { transaction: t });
    await PostCategory.create({ postId: post.id, categoryId: id1 }, { transaction: t });
    await PostCategory.create({ postId: post.id, categoryId: id2 }, { transaction: t });
    return post;
  });
  return result;
};

module.exports = {
  createPost,
};