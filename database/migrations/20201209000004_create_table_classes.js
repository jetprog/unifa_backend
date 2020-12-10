
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classes', function(table) {
    table.increments('id').primary();
    table.integer('faculty_id').unsigned();
    table.string('name', 250);
    table.string('description', 250);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('faculty_id').references('faculties.id').onUpdate('CASCADE').onDelete('RESTRICT');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classes');
};
