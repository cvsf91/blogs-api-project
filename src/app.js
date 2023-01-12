const express = require('express');
const { loginRoutes, userRoutes, categoryRoutes, blogPostRoutes } = require('./routes');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', blogPostRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
