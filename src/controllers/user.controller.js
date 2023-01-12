const service = require('../services/user.service');
const { encode } = require('../jwt/token');

const requiredFieldsMsg = 'Some required fields are missing';
const invalidFieldsMsg = 'Invalid fields';

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: requiredFieldsMsg });
  }
  const result = await service.loginUser(email, password);
  if (!result) return res.status(400).json({ message: invalidFieldsMsg });
  const { password: _, ...bodyWithoutPassword } = req.body;
  const token = encode({ data: bodyWithoutPassword });
  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  try {
    await service.createUser(req.body);
    const { password: _, ...bodyWithoutPassword } = req.body;
    const token = encode({ data: bodyWithoutPassword });
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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await service.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  delete user.dataValues.password;
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUserById,
};