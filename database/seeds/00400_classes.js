var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 100; i++) {
    models.push({
      faculty_id: parseInt(Math.random() * 100 + 1),
      name: faker.lorem.sentence().slice(0, 250),
      description: faker.lorem.sentence().slice(0, 250),

    });
  }

  return knex('classes').insert(models);
};
