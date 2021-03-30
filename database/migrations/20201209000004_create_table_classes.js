let classes = [
    {id: 4, faculty_id: 1, name: '1e année B Faculté de Médecine'},
    {id: 5, faculty_id: 1, name: '1e année A Faculté de Médecine'},
    {id: 6, faculty_id: 1, name: '1e année C Faculté de Médecine'},
    {id: 7, faculty_id: 1, name: '1e année D Faculté de Médecine'},
    {id: 8, faculty_id: 1, name: '1e année E Faculté de Médecine'},
    {id: 49, faculty_id: 1, name: '2e année A Faculté de Médecine'},
    {id: 15, faculty_id: 1, name: '2e année B Faculté de Médecine'},
    {id: 16, faculty_id: 1, name: '2e année C Faculté de Médecine'},
    {id: 25, faculty_id: 1, name: '3e année A Faculté de Médecine'},
    {id: 27, faculty_id: 1, name: '3e année B Faculté de Médecine'},
    {id: 28, faculty_id: 1, name: '3e année C Faculté de Médecine'},
    {id: 36, faculty_id: 1, name: '4e année A Faculté de Médecine'},
    {id: 37, faculty_id: 1, name: '4e année B Faculté de Médecine'},
    {id: 45, faculty_id: 1, name: '5e année Faculté de Médecine'},
    {id: 11, faculty_id: 2, name: '1e année Faculté Odontologie'},
    {id: 50, faculty_id: 2, name: '2e année A Faculté Odontologie'},
    {id: 20, faculty_id: 2, name: '2e année B Faculté Odontologie'},
    {id: 31, faculty_id: 2, name: '3e année Faculté Odontologie'},
    {id: 40, faculty_id: 2, name: '4e année Faculté Odontologie'},
    {id: 46, faculty_id: 2, name: '5e année Faculté Odontologie'},
    {id: 10, faculty_id: 3, name: '1e année Faculté des Sciences Infirmières'},
    {id: 18, faculty_id: 3, name: '2e année Faculté des Sciences Infirmières'},
    {id: 29, faculty_id: 3, name: '3e année Faculté des Sciences Infirmières'},
    {id: 38, faculty_id: 3, name: '4e année Faculté des Sciences Infirmières'},
    {id: 9, faculty_id: 4, name: '1e année Faculté des Sciences Économiques et Administratives'},
    {id: 19, faculty_id: 4, name: '2e Année Faculté des Sciences Économiques et Administratives'},
    {id: 30, faculty_id: 4, name: '3e année Faculté des Sciences Économiques et Administratives'},
    {id: 39, faculty_id: 4, name: '4e année Faculté des Sciences Économique et Administratives'},
    {id: 1, faculty_id: 5, name: '1ère année génie'},
    {id: 21, faculty_id: 5, name: '2e année Génie'},
    {id: 32, faculty_id: 5, name: '3e année Génie'},
    {id: 41, faculty_id: 5, name: '4e année Génie'},
    {id:47, faculty_id: 5, name: '5e année Génie'},
    {id: 3, faculty_id: 6, name: '1ere annee architecture'},
    {id: 17, faculty_id: 6, name: '2e année Architecture'},
    {id: 26, faculty_id: 6, name: '3e année Architecture'},
    {id: 51, faculty_id: 6, name: '4e année Architecture'},
    {id: 2, faculty_id: 7, name: '1ere année Sciences de la Nature et Agriculture'},
    {id: 22, faculty_id: 7, name: '2e année Sciences de la Nature et Agriculture'},
    {id: 33, faculty_id: 7, name: '3e année Sciences de la Nature et Agriculture'},
    {id: 42, faculty_id: 7, name: '4e année Sciences de la Nature et de Agriculture'},
    {id: 48, faculty_id: 7, name: '5e année Sciences de la Nature et de Agriculture'},
    {id: 13, faculty_id: 8, name: '1e année École de Physiothérapie'},
    {id: 24, faculty_id: 8, name: '2e année École de Physiothérapie'},
    {id: 35, faculty_id: 8, name: '3e année École de Physiothérapie'},
    {id: 44, faculty_id: 8, name: '4e année École de Physiothérapie'},
    {id: 12, faculty_id: 9, name: '1e année Sciences Juridiques et Politiques'},
    {id: 23, faculty_id: 9, name: '2e année Sciences Juridiques et Politiques'},
    {id: 34, faculty_id: 9, name: '3e année Sciences Juridiques et Politiques'},
    {id: 43, faculty_id: 9, name: '4e année Sciences Juridiques et Politiques'}
  ];

exports.up = function(knex, Promise) {
  return knex.schema.createTable('classes', function(table) {
    table.increments('id').primary();
    table.integer('faculty_id').unsigned();
    table.string('name', 250);
    table.string('description', 250);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());

    table.foreign('faculty_id').references('faculties.id').onUpdate('CASCADE').onDelete('RESTRICT');

  })
  .then(() => knex('classes').insert(classes));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classes');
};