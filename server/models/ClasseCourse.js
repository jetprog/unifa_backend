const bookshelf = require('../../database/config');

var ClasseCourse = bookshelf.Model.extend({
  tableName: 'classe_courses',
  hasTimeStamps: true,
  hidden: [''],
  classe() {
    return this.belongsTo('Classe');
  },
  course() {
    return this.belongsTo('Course');
  },

});

module.exports = bookshelf.model('ClasseCourse', ClasseCourse);
