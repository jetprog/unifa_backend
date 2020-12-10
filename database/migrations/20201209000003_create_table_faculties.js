
exports.up = function(knex, Promise) {
  return knex.schema.createTable('faculties', function(table) {
    table.increments('id').primary();
    table.string('name', 250);
    table.string('sigle', 255);
    table.string('duration', 100);

    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());
  })
  .then(() => knex('faculties').insert([
    { name: 'Faculté de médecine', sigle: 'FM', duration: '5 ans'},
    { name: 'Faculté odontologie', sigle: 'FDO', duration: '4 ans'},
    { name: 'Faculté de science infirmière', sigle: 'FSI', duration: '4 ans'},
    { name: 'Faculté des sciences économiques et administratives', sigle: 'FSEA', duration: '4 ans'},
    { name: 'Faculté de génie', sigle: 'FG', duration: '5 ans'},
    { name: 'Faculté architecture', sigle: 'FA', duration: '3 ans'},
    { name: 'Faculté des sciences de la nature et agriculture', sigle: 'FSNA', duration: '5 ans'},
    { name: 'Faculté de Physiotherapie', sigle: 'FPHY', duration: '4 ans'},
    { name: 'Faculté des sciences juridiques et politiques', sigle: 'FJSP', duration: '4 ans'}
  ]));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('faculties');
};
