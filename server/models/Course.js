const bookshelf = require('../../database/config');

var Course = bookshelf.Model.extend({
  tableName: 'courses',
  hasTimeStamps: true,
  hidden: [''],
  classeCourses() {
    return this.hasMany('ClasseCourse');
  },
  notes() {
    return this.hasMany('Note');
  },

});

module.exports = bookshelf.model('Course', Course);
