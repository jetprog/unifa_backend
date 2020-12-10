const Swagger = require('./Swagger');

class User extends Swagger {

  constructor(crud, doc, entity) {
    super();
    this.crud = crud;
    this.entity = entity;
    this.doc = doc;
  }

  generate() {
    // remove or add methods to update endpoint documentation
    // those methods are called from parent class: Swagger
    this.generateIndex();
    this.generateFind();
    this.generateStore();
    this.generateUpdate();
    this.generateDelete();

    return this.doc;
  }

}

module.exports = User;
