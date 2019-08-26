const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'Autentiation denied!' });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwt'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Autentiation denied!' });
  }
};
