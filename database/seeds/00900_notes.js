var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 100; i++) {
    models.push({
      student_id: parseInt(Math.random() * 100 + 1),
      classe_id: parseInt(Math.random() * 100 + 1),
      academic_year_id: parseInt(Math.random() * 100 + 1),
      course_id: parseInt(Math.random() * 100 + 1),

    });
  }

  return knex('notes').insert(models);
};
