const { decode } = require('../../jwt/token');
const { User, BlogPost } = require('../../models');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  const { id } = req.params;
  const result = decode(token);
  const { email } = result.data;
  const [user] = await User.findAll({ where: { email } });
  const [post] = await BlogPost.findAll({ where: { id } });
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (user.dataValues.id !== post.dataValues.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return next();
};