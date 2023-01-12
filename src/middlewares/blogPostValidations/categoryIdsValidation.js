const { Category } = require('../../models');

const message = 'one or more "categoryIds" not found';

module.exports = async (req, res, next) => {
  const { categoryIds: [id1, id2] } = req.body;
  const v1 = await Category.findByPk(id1);
  const v2 = await Category.findByPk(id2);
  if (!v1 || !v2) return res.status(400).json({ message });
  return next();
};