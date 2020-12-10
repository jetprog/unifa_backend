const bookshelf = require('../../database/config');

var Student = bookshelf.Model.extend({
  tableName: 'students',
  hasTimeStamps: true,
  hidden: [''],
  faculty() {
    return this.belongsTo('Faculty');
  },
  classe() {
    return this.belongsTo('Classe');
  },

});

module.exports = bookshelf.model('Student', Student);
