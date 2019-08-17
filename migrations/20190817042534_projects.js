exports.up = function(knex) {
  return (
    knex.schema
      //`project` can have multiple `tasks`
      .createTable('project', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.text('description');
        tbl
          .boolean('completed')
          .notNullable()
          .defaultTo(false);
      })
      //`task` belongs to only one `project`
      .createTable('task', tbl => {
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl
          .boolean('completed')
          .notNullable()
          .defaultTo(false);
        tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('project')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
      //the same `resource` can be used in multiple `projects`
      .createTable('resource', tbl => {
        tbl.increments();
        tbl
          .string('name')
          .notNullable()
          .unique();
        tbl.text('description');
      })
      //many to many relation for project_resource
      .createTable('project_resource', tbl => {
        tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('project')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl
          .integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resource')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        //Make the combination of foreign keys unique.
        tbl.primary(['project_id', 'resource_id']);
      })
  );
};

//dropping tables in reverse order
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project');
};
