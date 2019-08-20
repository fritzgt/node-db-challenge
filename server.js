const express = require('express');

const server = express();

server.use(express.json());

//Importing projects
const projectsRouter = require('./projects/projectsRouter');

//Importing resources
const resourcesRouter = require('./resources/resourcesRouter');

//setting route for projects
server.use('/projects', projectsRouter);

//setting route for resources
server.use('/resources', resourcesRouter);

server.use('/', (req, res) => {
  res.status(200).send('Hello world!');
});

module.exports = server;
