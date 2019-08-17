exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('task').insert([
        {
          description: 'think about a useful app',
          notes: 'Many notes',
          project_id: 1
        },
        { description: 'Find a school', notes: 'Study', project_id: 2 }
      ]);
    });
};
