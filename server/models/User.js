const bookshelf = require('../../database/config');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,
  hidden: [''],
  type() {
    return this.belongsTo('Type');
  },

});

module.exports = bookshelf.model('User', User);
