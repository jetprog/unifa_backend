const Faculty = require('../../models/Faculty');
const Controller = require('../Controller');


class FacultyController extends Controller {
  constructor() {
    super();
    this.model = Faculty;
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

module.exports = FacultyController;
