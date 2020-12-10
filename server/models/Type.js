const bookshelf = require('../../database/config');

var Type = bookshelf.Model.extend({
  tableName: 'types',
  hasTimeStamps: true,
  hidden: [''],
  users() {
    return this.hasMany('User');
  },

});

module.exports = bookshelf.model('Type', Type);
