exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('code').defaultTo('unifa-admin');
  });
};

exports.down = function(knex, Promise) {

};
