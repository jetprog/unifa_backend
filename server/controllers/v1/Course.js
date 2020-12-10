const Course = require('../../models/Course');
const Controller = require('../Controller');


class CourseController extends Controller {
  constructor() {
    super();
    this.model = Course;
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

module.exports = CourseController;
