const express = require('express');
const { loginUser, createUser } = require('./controllers/user.controller');
const { name, email, password, userExistence } = require('./middlewares/userValidations');
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

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
