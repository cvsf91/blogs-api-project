const { decode } = require('../../jwt/token');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const result = decode(token);
    if (result.data) {
      req.token = result;
      return next();
    }
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  return next();
};

module.exports = verifyToken;
