const express = require('express');

//implementing routing
const router = express.Router();

//importing db
const Resources = require('../model/resources-model');

//get all projects
router.get('/', async (req, res) => {
  try {
    const data = await Resources.find();
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ err });
  }
});

//Post a new project
router.post('/', async (req, res) => {
  const newResource = req.body;
  try {
    const data = await Resources.add(newResource);
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ err });
  }
});

module.exports = router;
