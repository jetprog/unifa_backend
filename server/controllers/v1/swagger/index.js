const Swagger = require('./Swagger');
const Auth = require('./Auth');
const Type = require('./Type');
const User = require('./User');
const Faculty = require('./Faculty');
const Classe = require('./Classe');
const Course = require('./Course');
const ClasseCourse = require('./ClasseCourse');
const Student = require('./Student');
const AcademicYear = require('./AcademicYear');
const Note = require('./Note');



class Index {

  constructor(crud, doc) {
    this.crud = crud;
    this.doc = doc;
  }

  generate() {
    this.doc = {
      paths: {}
    };

    // auth endpoints (Auth doc will be empty if not using authentication)
    // retrieve Auth entity
    let entities = this.crud.entities.filter(ent => {
      return ent.hasOwnProperty('auth');
    });

    if (entities.length) {
      const auth = new Auth(entities[0]);
      let data = auth.generate();
      this.doc.paths = {
        ...this.doc.paths,
        ...data.paths,
      };
      this.doc.components = {
        ...this.doc.components,
        ...data.components,
      };
    }

    // PUT ALL SWAGGER CONTROLLERS with Documentation code HERE
    // auto-generated endpoints
    const swagger = new Swagger(this.crud, this.doc);
    this.doc = swagger.generate();

    // Documentation for Type
const type = new Type(this.crud, this.doc, this.getEntity('Type'));
this.doc = type.generate();
// Documentation for User
const user = new User(this.crud, this.doc, this.getEntity('User'));
this.doc = user.generate();
// Documentation for Faculty
const faculty = new Faculty(this.crud, this.doc, this.getEntity('Faculty'));
this.doc = faculty.generate();
// Documentation for Classe
const classe = new Classe(this.crud, this.doc, this.getEntity('Classe'));
this.doc = classe.generate();
// Documentation for Course
const course = new Course(this.crud, this.doc, this.getEntity('Course'));
this.doc = course.generate();
// Documentation for ClasseCourse
const classeCourse = new ClasseCourse(this.crud, this.doc, this.getEntity('ClasseCourse'));
this.doc = classeCourse.generate();
// Documentation for Student
const student = new Student(this.crud, this.doc, this.getEntity('Student'));
this.doc = student.generate();
// Documentation for AcademicYear
const academicYear = new AcademicYear(this.crud, this.doc, this.getEntity('AcademicYear'));
this.doc = academicYear.generate();
// Documentation for Note
const note = new Note(this.crud, this.doc, this.getEntity('Note'));
this.doc = note.generate();


    return this.doc;
  }

  getEntity(entityName) {
    return this.crud.entities.filter(entity => {
      return entity.name === entityName;
    })[0];
  }

}

module.exports = Index;
