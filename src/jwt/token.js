const jwt = require('jsonwebtoken');

const secret = 'secretJWT';
const jwtConfig = {
  expiresIn: '1w',
  algorithm: 'HS256',
};

const encode = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const decode = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    console.log('Message: ', error.message);
  }
};

module.exports = { encode, decode };