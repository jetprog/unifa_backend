const Demande = require('../../models/Demande');
const Controller = require('../Controller');


class DemandeController extends Controller {
  constructor() {
    super();
    this.model = Demande;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['classe'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['classe'],
    };
    super.find(req, res, next);
  }

}

module.exports = DemandeController;
