
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments('id').primary();
    table.integer('classe_id').unsigned();
    table.integer('academic_year_id').unsigned();
    table.enum('session', ['Session 1', 'Session 2', 'Session Extra']);
    table.jsonb('note_classe');

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('classe_id').references('classes.id').onUpdate('CASCADE').onDelete('RESTRICT');
    table.foreign('academic_year_id').references('academic_years.id').onUpdate('CASCADE').onDelete('RESTRICT');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};