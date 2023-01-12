const express = require('express');
const { loginUser, createUser, getUsers, getUserById } = require('./controllers/user.controller');
const { name, email, password, userExistence } = require('./middlewares/userValidations');
const verifyToken = require('./middlewares/jwt/verifyToken');
// ...

const app = express();

app.use(express.json());

app.post('/login', loginUser);

app.post(
  '/user',
  name,
  email,
  password,
  userExistence,
  createUser,
);

app.get(
  '/user',
  verifyToken,
  getUsers,
);

app.get(
  '/user/:id',
  verifyToken,
  getUserById,
);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
