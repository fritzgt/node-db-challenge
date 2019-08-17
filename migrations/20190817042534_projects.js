exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.text('description');
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex) {};
