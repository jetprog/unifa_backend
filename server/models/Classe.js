const bookshelf = require('../../database/config');

var Classe = bookshelf.Model.extend({
  tableName: 'classes',
  hasTimeStamps: true,
  hidden: [''],
  faculty() {
    return this.belongsTo('Faculty');
  },
  students() {
    return this.hasMany('Student');
  },
  notes() {
    return this.hasMany('Note');
  },
  demandes() {
    return this.hasMany('Demande');
  },

});

module.exports = bookshelf.model('Classe', Classe);
