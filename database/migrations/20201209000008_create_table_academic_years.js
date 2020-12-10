
exports.up = function(knex, Promise) {
  return knex.schema.createTable('academic_years', function(table) {
    table.increments('id').primary();
    table.string('debut', 255);
    table.string('fin', 255);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

  })
  .then(() => knex('academic_years').insert([
    { debut: '2019', fin: '2020'},
    { debut: '2020', fin: '2021'},
  ]));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('academic_years');
};
