const ClasseCourse = require('../../models/ClasseCourse');
const Controller = require('../Controller');


class ClasseCourseController extends Controller {
  constructor() {
    super();
    this.model = ClasseCourse;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['classe', 'course'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['classe', 'course'],
    };
    super.find(req, res, next);
  }

}

module.exports = ClasseCourseController;
