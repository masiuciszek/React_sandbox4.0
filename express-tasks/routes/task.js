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

/*
@ method Put /api/tasks/:id
@ desc update Task
@ access Private
*/
router.put('/:id', auth, async (req, res) => {
  const { title, description, completed } = req.body;
  const taskFields = {};
  if (title) taskFields.title = title;
  if (description) taskFields.description = description;
  if (completed) taskFields.completed = completed;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(401).json({ msg: 'Task not found' });

    // check that user own the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    console.log(task.user, ' task.user');
    console.log(task.user.toString(), ' task.user.toString()');
    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: taskFields },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

/*
@ method Put /api/tasks/:id
@ desc update Task
@ access Private
*/
router.delete('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    task = await Task.findByIdAndRemove(req.params.id);
    res.send('Task got deleted ');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
