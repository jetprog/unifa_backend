
exports.up = function(knex, Promise) {
  return knex.schema.createTable('demandes', function(table) {
    table.increments('id').primary();
    table.integer('classe_id').unsigned();
    table.enum('session', ['Session 1', 'Session 2', 'Session Extra']);
    table.string('code', 50).unique();
    table.string('nom', 50);
    table.string('prenom', 50);
    table.string('telephone', 50);
    table.string('email', 100);
    table.string('matiere_one', 100);
    table.string('matiere_two', 100);
    table.string('matiere_three', 100);
    table.string('motif_one', 100);
    table.string('motif_two', 100);
    table.string('motif_three', 100);


    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('classe_id').references('classes.id').onUpdate('CASCADE').onDelete('RESTRICT');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('demandes');
};