const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const result = jwt.verify(token, 'secretJWT');
    if (result.data) {
      return next();
    }
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  const result = jwt.verify(token, 'secretJWT');
  console.log('payload:', result);
  return next();
};

module.exports = verifyToken;
