var faker = require('faker/locale/en');
const AuthController = require('../../server/controllers/v1/Auth');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];
  const auth = new AuthController();

  return auth.genSalt().then(salt => auth.genHash('Pass1234', salt)).then(hash => {
    // push a first record with a default code to signin fot token
    models.push(
      {
        faculty_id: parseInt(Math.random() * 100 + 1),
        classe_id: parseInt(Math.random() * 100 + 1),
        code: faker.lorem.sentence().slice(0, 50),
        nom: faker.lorem.sentence().slice(0, 100),
        prenom: faker.lorem.sentence().slice(0, 250),
        sexe: faker.lorem.sentence().slice(0, 1),
        date_naissance: faker.date.past(),
        picture: faker.lorem.sentence().slice(0, 255),
        password: hash,
        isPayed: faker.random.boolean(),
        code: `FA-2020-20`
      }
    );

    for (let i = 0; i < (100 - 1); i++) {
      models.push({
        faculty_id: parseInt(Math.random() * 100 + 1),
        classe_id: parseInt(Math.random() * 100 + 1),
        code: faker.lorem.sentence().slice(0, 50),
        nom: faker.lorem.sentence().slice(0, 100),
        prenom: faker.lorem.sentence().slice(0, 250),
        sexe: faker.lorem.sentence().slice(0, 1),
        date_naissance: faker.date.past(),
        picture: faker.lorem.sentence().slice(0, 255),
        password: hash,
        isPayed: faker.random.boolean(),

      });
    }

    return knex('students').insert(models);
  })
  .catch(error => {
    console.log('students seeds error', error);
  });
};


