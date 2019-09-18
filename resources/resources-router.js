const express = require('express');

const resources = require('./resources-model')

const router = express.Router();

router.get('/', (req, res) => {
    resources
      .getResources()
      .then(resources => {
        res.status(200).json(resources);
      })
      .catch(err => {
        res.status(500).json({ message: 'error' });
      });
  });

  router.post('/', (req, res) => {
    const resource = req.body;
    resources
      .addResource(resource)
      .then(resource => {
        console.log(resource);
        res.status(200).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'could not add resource' });
      });
  });

  module.exports = router;