const express = require('express');
const { loginUser } = require('./controllers/user.controller');
// ...

const app = express();

app.use(express.json());

app.post('/login', loginUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
