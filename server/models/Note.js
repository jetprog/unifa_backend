const bookshelf = require('../../database/config');

var Note = bookshelf.Model.extend({
  tableName: 'notes',
  hasTimeStamps: true,
  hidden: [''],
  classe() {
    return this.belongsTo('Classe');
  },
  academicYear() {
    return this.belongsTo('AcademicYear');
  },


}, {
  jsonColumns: ['note_classe'],
});


module.exports = bookshelf.model('Note', Note);
