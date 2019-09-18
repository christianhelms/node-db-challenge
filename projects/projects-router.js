const express = require('express');

const projects = require('./projects-model');


const router = express.Router();

// gets projects
router.get('/', (req, res) => {
    projects
      .getProjects()
      .then(projects => {
        projects.map(project => {
          if (project.completed === 0) {
            project.completed = false;
          } else {
            project.completed = true;
          }
        });
        res.status(200).json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'error' });
      });
  });

  // posts projects
router.post('/', (req, res) => {
    const project = req.body;
    projects.addProject(project)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        res.status(500).json({ message: 'unable to add project'});
    })
})

module.exports = router;