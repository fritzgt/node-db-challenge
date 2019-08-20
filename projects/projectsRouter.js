const express = require('express');

//implementing routing
const router = express.Router();

//importing db
const Projects = require('../model/projects-model');

//get all projects
router.get('/', async (req, res) => {
  try {
    const data = await Projects.find();
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ err });
  }
});

//Post a new project
router.post('/', async (req, res) => {
  const newProject = req.body;
  try {
    const data = await Projects.add(newProject);
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ err });
  }
});

//Task section

//Get a new task
router.get('/:id/task', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Projects.findTaskById(id);
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ err });
  }
});

//Post a new task
router.post('/:id/task', async (req, res) => {
  const newTask = req.body;
  try {
    const data = await Projects.addTask(newTask);
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ err });
  }
});

module.exports = router;
