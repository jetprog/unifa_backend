const Promise = require('bluebird');
require('dotenv').config();
const bcrypt = Promise.promisifyAll(require('bcrypt'));
const password = bcrypt.hashSync(process.env.DEFAULT_PASSWORD, parseInt(process.env.HASH_TOUR));
const email = process.env.DEFAULT_EMAIL;

exports.up = function(knex, Promise) {
  return knex.schema.createTable('types', function(table) {
    table.increments('id').primary();
    table.string('name', 100);
    table.string('description', 255);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

  })
  .then(() => knex('types').insert([
    { name: 'Super Admin', description: 'a user in the system that can create other user'},
    { name: 'Decana', description: 'a user that can manage student info'},
  ]));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('types');
};
