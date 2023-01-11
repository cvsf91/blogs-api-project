const express = require('express');
const { createUser } = require('./controllers/user.controller');
// ...

const app = express();

app.use(express.json());

app.get('/login', createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
