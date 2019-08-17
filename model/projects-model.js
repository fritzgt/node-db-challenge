const db = require('../db-config');

module.exports = {
  find,
  findById,
  findTaskById,
  add,
  addTask,
  update,
  remove
};

function find() {
  return db('project');
}

function findById(id) {}

function add(newProject) {
  return db('project').insert(newProject);
}

function update(changes, id) {}

function remove(id) {}

//Task

function findTaskById(id) {
  return db
    .select('*')
    .from('task')
    .where('project_id', id);
}

function addTask(newTask) {
  return db('task').insert(newTask);
}
