const db = require('../db-config');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db('resource');
}

function findById(id) {}

function add(newResource) {
  return db('resource').insert(newResource);
}

function update(changes, id) {}

function remove(id) {}
