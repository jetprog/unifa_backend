const Student = require('../../models/Student.js');
const User = require('../../models/User.js');
const Controller = require('../Controller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class Auth extends Controller {
  constructor() {
    super();
    this.round = 10;
  }

  genHash(password, salt) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(hash);
        }
      });
    });
  }

  genSalt() {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(this.round, (error, salt) => {
        if (error) {
          reject(error);
        } else {
          resolve(salt);
        }
      });
    });
  }

  compare(data, encrypted) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(data, encrypted, (error, matched) => {
        if (error) {
          reject(error);
        } else {
          resolve(matched);
        }
      });
    });
  }

    // Find auth model from current token
  authAdmin(req, res) {
    return new User({ id: req.auth.id })
      .fetch()
      .then(user => {
        res.status(200).send(user);
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not retrieve Authenticated user',
          error: details,
        });
      });
  }

  // Find auth model from current token
  auth(req, res) {
    return new Student({ id: req.auth.id })
      .fetch()
      .then(student => {
        res.status(200).send(student);
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not retrieve Authenticated student',
          error: details,
        });
      });
  }

  // Signup method for student
  signup(req, res) {
    let data = req.body;

    this.genSalt()
      .then(salt => {
        return this.genHash(data.password, salt);
      })
      .then(hash => {
        data.password = hash;
        return new Student()
          .save(data, { method: 'insert' })
          .then(result => {
            return new Student({ id: result.id })
              .fetch()
              .then(student => {
                // Change code below to skip token on registration
                let token = jwt.sign(student.toJSON(), process.env.JWT_SECRET, { expiresIn: '720h' });
                res.status(200).send({ token, student });
              });
          });
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not signup the student',
          error: details
        });
      });
  }

    // Signup method for administration
  signupAdmin(req, res) {
    let data = req.body;

    this.genSalt()
      .then(salt => {
        return this.genHash(data.password, salt);
      })
      .then(hash => {
        data.password = hash;
        return new User()
          .save(data, { method: 'insert' })
          .then(result => {
            return new User({ id: result.id })
              .fetch()
              .then(user => {
                // Change code below to skip token on registration
                let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '720h' });
                res.status(200).send({ token, user });
              });
          });
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not signup the administration',
          error: details
        });
      });
  }

  // Create administration signin process
  signinAdmin(req, res, next) {
    let data = req.body;

    new User({ code: data.code })
      .fetch()
      .then(user => {
        if (!user) {
          throw new Error('Wrong administration credentials');
        }
        return user;
      })
      .then(user => {
        return this.compare(data.password, user.get('password'))
          .then(matched => {
            if (!matched) {
              throw new Error('Wrong administration credentials');
            }
          })
          .then(() => {
            let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '720h' });
            res.status(200).send({ token, user });
          }, error => {
            let details = this.getErrorDetails(error);
            res.status(400).send({
              message: error.message,
              error: details
            });
          });
      }, error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: error.message,
          error: details
        });
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not signin the administration',
          error: details
        });
      });
  }

  // Create student signin process
  signin(req, res) {
    let data = req.body;

    new Student({ code: data.code })
      .fetch()
      .then(student => {
        if (!student) {
          throw new Error('Wrong student credentials');
        }
        return student;
      })
      .then(student => {
        return this.compare(data.password, student.get('password'))
          .then(matched => {
            if (!matched) {
              throw new Error('Wrong student credentials');
            }
          })
          .then(() => {
            let token = jwt.sign(student.toJSON(), process.env.JWT_SECRET, { expiresIn: '720h' });
            res.status(200).send({ token, student });
          }, error => {
            let details = this.getErrorDetails(error);
            res.status(400).send({
              message: error.message,
              error: details
            });
          });
      }, error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: error.message,
          error: details
        });
      })
      .catch(error => {
        let details = this.getErrorDetails(error);
        res.status(400).send({
          message: 'Could not signin the student',
          error: details
        });
      });
  }
}

module.exports = Auth;