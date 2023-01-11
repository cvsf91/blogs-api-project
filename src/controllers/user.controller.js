const jwt = require('jsonwebtoken');
const service = require('../services/user.service');

const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const result = await service.createUser(req.body)
  delete req.body.password;
  console.log('body:', req.body);
  console.log('result:', result);
  const token = jwt.sign({ data: req.body }, process.env.JWT_SECRET, jwtConfig)
  return res.status(200).json({ token });
}

module.exports = {
  createUser,
}