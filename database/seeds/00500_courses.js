var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 100; i++) {
    models.push({
      name: faker.lorem.sentence().slice(0, 150),
      description: faker.lorem.sentence().slice(0, 3),

    });
  }

  return knex('courses').insert(models);
};
