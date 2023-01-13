const { getUserByEmail } = require('../../services/user.service');
const { getPostById } = require('../../services/blogPost.service');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { email } = req.token.data;
  const user = await getUserByEmail(email);
  const post = await getPostById(id);
  if (post.userId !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return next();
};