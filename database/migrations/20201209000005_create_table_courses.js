
exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', function(table) {
    table.increments('id').primary();
    table.string('name', 150);
    table.string('description', 3);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('courses');
};
