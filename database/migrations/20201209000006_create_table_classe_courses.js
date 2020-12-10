
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classe_courses', function(table) {
    table.increments('id').primary();
    table.integer('classe_id').unsigned();
    table.integer('course_id').unsigned();
    table.string('description', 255);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('classe_id').references('classes.id').onUpdate('CASCADE').onDelete('RESTRICT');
    table.foreign('course_id').references('courses.id').onUpdate('CASCADE').onDelete('RESTRICT');
  })
  .then(() => knex('courses').insert([
    { name: 'Anglais'},
    { name: 'Espagnol'},
    { name: 'Biologie Cellulaire'},
    { name: 'Chimie Générale'},
    { name: 'Géologie'},
    { name: 'Physique Générale'},
    { name: 'Paysage Agraire'},
    { name: 'Mathématiques'},
    { name: 'Morphologie Végétale'},
    { name: 'Travaux Pratiques'},
    { name: 'Zoologie'},
  ]));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classe_courses');
};
