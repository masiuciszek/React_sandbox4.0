const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');

/*
@ method Post /api/tasks
@ desc Create a new task
@ access private
*/

router.post(
  '/',
  [
    auth,
    [
      check('title', 'title is required')
        .not()
        .isEmpty(),
      check('description', 'description is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ msg: errors.array() });
    }
    const { title, description, completed } = req.body;
    try {
      const newTask = new Task({
        title,
        description,
        completed,
        user: req.user.id,
      });
      await newTask.save();
      res.json(newTask);
    } catch (err) {
      res.status(500).send('Server error');
    }
  }
);

/*
@ method Get /api/tasks
@ desc Get all tasks
@ access private
*/
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ date: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

/*
@ method Get /api/tasks
@ desc Get all tasks
@ access Public
*/

router.get('/demo-tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
