const jwt = require('jsonwebtoken');
const service = require('../services/user.service');

const requiredFieldsMsg = "Some required fields are missing";
const invalidFieldsMsg = "Invalid fields";

const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: requiredFieldsMsg });
  }
  const result = await service.loginUser(email, password);
  if (!result) return res.status(400).json({ message: invalidFieldsMsg });
  delete req.body.password
  const token = jwt.sign({ data: req.body }, process.env.JWT_SECRET, jwtConfig)
  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const result = await service.createUser(req.body)
  return res.status(200).json({ message: 'ok' });
}

module.exports = {
  createUser,
  loginUser,
}