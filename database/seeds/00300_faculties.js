var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 100; i++) {
    models.push({
      name: faker.lorem.sentence().slice(0, 250),
      sigle: faker.lorem.sentence().slice(0, 255),
      duration: faker.lorem.sentence().slice(0, 100),

    });
  }

  return knex('faculties').insert(models);
};
