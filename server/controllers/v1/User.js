const User = require('../../models/User');
const Controller = require('../Controller');
const Auth = require('./Auth');

class UserController extends Controller {
  constructor() {
    super();
    this.model = User;
  }

  all(req, res, next) {
    this.attribs = {
      withRelated: ['type'],
    };
    super.all(req, res, next);
  }

  find(req, res, next) {
    this.attribs = {
      withRelated: ['type'],
    };
    super.find(req, res, next);
  }

  insert(req, res) {
    let data = req.body;

    Auth.hashPass(data.password, (password)=>{
      data.password = password;
      const model = new this.model();
      model.insert(data, (error, user)  => {
        if (error) {
          res.status(403).send({
            message: "Can't create the user",
            error
          });
        } else {
          res.status(200).send(user);
        }
      });
    });
  };

  update(req, res) {
    // remove password and email for body here
    let data = req.body;
    delete data.password;
    delete data.email;

    const model = new this.model();
    model.update(req.params.id, data, (error, result) => {
      if (error) {
        res.status(400).send({ message: "Error can't update user" });
      }
      else {
        res.status(200).send(result);
      }
    });
  };
}

module.exports = UserController;
