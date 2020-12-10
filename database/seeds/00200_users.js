var faker = require('faker/locale/en');
const AuthController = require('../../server/controllers/v1/Auth');

exports.seed = function(knex, Promise) {
  // Inserts seed entries
  let models = [];
  const auth = new AuthController();

  return auth.genSalt().then(salt => auth.genHash('Pass1234', salt)).then(hash => {
    // push a first record with a default email to signin fot token
    models.push(
      {
        type_id: parseInt(Math.random() * 100 + 1),
        email: faker.lorem.sentence().slice(0, 100),
        password: hash,
        email: `jsethjetro@gmail.com`
      }
    );

    for (let i = 0; i < (100 - 1); i++) {
      models.push({
        type_id: parseInt(Math.random() * 100 + 1),
        email: faker.lorem.sentence().slice(0, 100),
        password: hash,

      });
    }

    return knex('users').insert(models);
  })
  .catch(error => {
    console.log('users seeds error', error);
  });
};


