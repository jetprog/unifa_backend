const Promise = require('bluebird');
require('dotenv').config();
const bcrypt = Promise.promisifyAll(require('bcrypt'));
const password = bcrypt.hashSync(process.env.DEFAULT_PASSWORD, parseInt(process.env.HASH_TOUR));
const email = process.env.DEFAULT_EMAIL;

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.integer('type_id').unsigned();
    table.string('email', 100);
    table.string('password', 500);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('type_id').references('types.id').onUpdate('CASCADE').onDelete('RESTRICT');
  })
  .then(() => knex('users').insert([
    { email, password, type_id: 1},
  ]));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
