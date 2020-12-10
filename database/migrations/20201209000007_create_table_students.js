
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table) {
    table.increments('id').primary();
    table.integer('faculty_id').unsigned();
    table.integer('classe_id').unsigned();
    table.string('code', 50).unique();
    table.string('nom', 100);
    table.string('prenom', 250);
    table.string('sexe', 1);
    table.date('date_naissance');
    table.text('commentaire');
    table.string('picture', 255);
    table.string('password', 500);
    table.boolean('isPayed');

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('faculty_id').references('faculties.id').onUpdate('CASCADE').onDelete('RESTRICT');
    table.foreign('classe_id').references('classes.id').onUpdate('CASCADE').onDelete('RESTRICT');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
