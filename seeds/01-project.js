exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('project').insert([
        { name: 'Create a cool app', description: 'Testing' },
        { name: 'Learn to flight', description: 'Testing' }
      ]);
    });
};
