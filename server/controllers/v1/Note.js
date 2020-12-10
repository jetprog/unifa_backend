const Note = require('../../models/Note');
const Controller = require('../Controller');


class NoteController extends Controller {
  constructor() {
    super();
    this.model = Note;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['classe', 'academicYear',],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['classe', 'academicYear'],
    };
    super.find(req, res, next);
  }

}

module.exports = NoteController;
