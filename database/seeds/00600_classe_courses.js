var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 100; i++) {
    models.push({
      classe_id: parseInt(Math.random() * 100 + 1),
      course_id: parseInt(Math.random() * 100 + 1),
      description: faker.lorem.sentence().slice(0, 255),

    });
  }

  return knex('classe_courses').insert(models);
};
