const bookshelf = require('../../database/config');

var Demande = bookshelf.Model.extend({
  tableName: 'demandes',
  hasTimeStamps: true,
  hidden: [''],
  classe() {
    return this.belongsTo('Classe');
  },

});


module.exports = bookshelf.model('Demande', Demande);
