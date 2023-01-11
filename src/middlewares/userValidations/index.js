const email = require('./validateEmail');
const name = require('./validateName');
const password = require('./validatePassword');
const userExistence = require('./validateUserExistence');

module.exports = { email, name, password, userExistence };