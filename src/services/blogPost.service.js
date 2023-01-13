const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { BlogPost, PostCategory, User, Category } = require('../models');

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

const deletePost = async (id) => {
  const result = await sequelize.transaction(async (t) => {
    await PostCategory.destroy({
      where: { postId: id },
    }, { transaction: t });
    await BlogPost.destroy({
      where: { id },
    }, { transaction: t });
  });
  return result;
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return post;
};

const updatePost = async (id, { title, content }) => {
  await BlogPost.update({ title, content },
    { where: { id } });
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return post;
};

const findPostsBySubString = async (string) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: string } },
        { content: { [Op.substring]: string } },
      ],
    },
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

module.exports = {
  createPost,
  deletePost,
  getPosts,
  getPostById,
  updatePost,
  findPostsBySubString,
};