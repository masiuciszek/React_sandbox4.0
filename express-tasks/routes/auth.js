const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const router = express.Router();
const User = require('../models/User');

/*
@ method Get /api/auth
@ desc get Logged in user
@ access Private
*/
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    return res.status(500).send('server error');
  }
});

/*
@ method Post /api/auth
@ desc Login User
@ access public
*/

router.post(
  '/',
  [
    check('email', 'please enter your email').isEmail(),
    check('password', 'please enter your email').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ msg: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ msg: 'Auth denied' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ msg: 'Auth denied' });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwt'),
        { expiresIn: 60 * 60 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      return res.status(500).send('server error');
    }
  }
);

module.exports = router;
