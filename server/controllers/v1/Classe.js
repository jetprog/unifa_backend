const Classe = require('../../models/Classe');
const Controller = require('../Controller');


class ClasseController extends Controller {
  constructor() {
    super();
    this.model = Classe;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['faculty'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['faculty'],
    };
    super.find(req, res, next);
  }

}

module.exports = ClasseController;
