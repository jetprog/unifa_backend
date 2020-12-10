const Type = require('../../models/Type');
const Controller = require('../Controller');


class TypeController extends Controller {
  constructor() {
    super();
    this.model = Type;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: [],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: [],
    };
    super.find(req, res, next);
  }

}

module.exports = TypeController;
