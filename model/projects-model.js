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
  return db('task as t')
    .join('project as p', 't.project_id', 'p.id')
    .select(
      'p.name as project_name',
      'p.description as project_description',
      't.description as task_description',
      't.notes as task_notes',
      't.completed as task_completed'
    )
    .where('project_id', id);
}

function addTask(newTask) {
  return db('task').insert(newTask);
}
