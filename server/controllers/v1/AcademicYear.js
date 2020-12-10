const AcademicYear = require('../../models/AcademicYear');
const Controller = require('../Controller');


class AcademicYearController extends Controller {
  constructor() {
    super();
    this.model = AcademicYear;
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

module.exports = AcademicYearController;
