const { User } = require('../../models');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const result = await User.findAll({
    where: {
      email,
    },
  });
  if (result.length) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return next();
};