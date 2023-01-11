const jwt = require('jsonwebtoken');
const service = require('../services/user.service');

const requiredFieldsMsg = 'Some required fields are missing';
const invalidFieldsMsg = 'Invalid fields';

const jwtConfig = {
  expiresIn: '1w',
  algorithm: 'HS256',
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: requiredFieldsMsg });
  }
  const result = await service.loginUser(email, password);
  if (!result) return res.status(400).json({ message: invalidFieldsMsg });
  const { password: _, ...bodyWithoutPassword } = req.body;
  const token = jwt.sign({ data: bodyWithoutPassword }, 'secretJWT', jwtConfig);
  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  try {
    await service.createUser(req.body);
    const { password: _, ...bodyWithoutPassword } = req.body;
    const token = jwt.sign({ data: bodyWithoutPassword }, process.env.JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (_req, res) => {
  try {
    const users = await service.getUsers();
    const usersWithoutPassword = users.map(({ password: _, id, displayName, email, image }) => (
      {
        id,
        displayName,
        email,
        image,
      }));
    return res.status(200).json(usersWithoutPassword);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
};