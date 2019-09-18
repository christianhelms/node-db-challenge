const express = require('express');

const tasks = require('./tasks-model');

const router = express.Router();

// get tasks
router.get('/', (req, res) => {
    console.log(req.body);
    tasks
      .getTasks()
      .then(tasks => {
        tasks.map(task => {
          if (task.completed === 0) {
            task.completed = false;
          } else {
            task.completed = true;
          }
        });
        res.status(200).json(tasks);
      })
      .catch(err => {
        res.status(500).json({
          message: 'error retrieving tasks, project name and description',
        });
      });
  });


  // adds task
  router.post('/', (req, res) => {
    const task = req.body;
    tasks
      .addTask(task)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'unable to add task' });
      });
  });

  module.exports = router;