const bookshelf = require('../../database/config');

var Faculty = bookshelf.Model.extend({
  tableName: 'faculties',
  hasTimeStamps: true,
  hidden: [''],
  students() {
    return this.hasMany('Student');
  },
  classes() {
    return this.hasMany('Classe');
  },

});

module.exports = bookshelf.model('Faculty', Faculty);
