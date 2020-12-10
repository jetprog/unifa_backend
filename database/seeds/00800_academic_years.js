var faker = require('faker/locale/en');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];

  for (let i = 0; i < 100; i++) {
    models.push({
      debut: faker.lorem.sentence().slice(0, 255),
      fin: faker.lorem.sentence().slice(0, 255),

    });
  }

  return knex('academic_years').insert(models);
};
