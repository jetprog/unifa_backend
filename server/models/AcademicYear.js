const bookshelf = require('../../database/config');

var AcademicYear = bookshelf.Model.extend({
  tableName: 'academic_years',
  hasTimeStamps: true,
  hidden: [''],
  notes() {
    return this.hasMany('Note');
  },

});

module.exports = bookshelf.model('AcademicYear', AcademicYear);
