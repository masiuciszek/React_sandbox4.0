const express = require('express');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const router = express.Router();
const User = require('../models/User');

/*
@ method Post /api/users
@ desc Create a ne user
@ access public
*/

router.post(
  '/',
  [
    check('name', 'name is Required')
      .not()
      .isEmpty(),
    check('email', 'email is Required')
      .not()
      .isEmpty(),
    check('password', 'password is Required').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({ msg: 'User already exists' });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }
    try {
      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(8);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

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
      res.status(500).send('Server error');
    }
  }
);

/*
@ method GET /api/users
@ desc get all users
@ access public
*/

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({ msg: 'No users' });
    }
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
