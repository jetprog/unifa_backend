const Student = require('../../models/Student');
const Controller = require('../Controller');
const Auth = require('./Auth');

class StudentController extends Controller {
  constructor() {
    super();
    this.model = Student;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['faculty', 'classe'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['faculty', 'classe'],
    };
    super.find(req, res, next);
  }

  findCode(req, res, next) {
    // this.attribs = this.attribs || {};
    // // uncomment to debug
    // //this.attribs.debug = true;

    // this.applyRelations(req.query);

    let code = req.params.code;

    new Student({ code: code })
      .fetch()
      .then(student => {
        delete student.password;
        res.status(200).send(student);
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not retrieve Authenticated user',
          error: details,
        });
      });
  };

  // findCode(req, res, next) {
  //   this.attribs = {
  //     withRelated: ['faculty', 'classe'],
  //   };
  //   super.find(req, res, next);
  // }

  update(req, res, next) {
    // Find model to get old filenames
    req.oldFilepaths = [];

    new this.model({ id })
      .fetch(this.attribs)
      .then((model) => {
        req.oldFilepaths.push('public/files/' + model.get('picture'));

        super.find(req, res, next);
      });
  }

  insert(req, res) {
    let data = req.body;

    Auth.hashPass(data.password, (password)=>{
      data.password = password;
      const model = new this.model();
      model.insert(data, (error, student)  => {
        if (error) {
          res.status(403).send({
            message: "Can't create the student",
            error
          });
        } else {
          res.status(200).send(student);
        }
      });
    });
  };

  update(req, res) {
    // remove password and code for body here
    let data = req.body;
    delete data.password;
    delete data.code;

    const model = new this.model();
    model.update(req.params.id, data, (error, result) => {
      if (error) {
        res.status(400).send({ message: "Error can't update student" });
      }
      else {
        res.status(200).send(result);
      }
    });
  };
}

module.exports = StudentController;
