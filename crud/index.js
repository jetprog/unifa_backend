const User = require('./entities/users');
const Course = require('./entities/courses');
const Faculty = require('./entities/faculties');
const Note = require('./entities/notes');
const Student = require('./entities/students');
const Type = require('./entities/types');
const Classe = require('./entities/classe');
const AcademicYear = require('./entities/academic_years');
const ClasseCourse = require('./entities/classe_courses');

module.exports = {
  package: 'unifa-backend',
  app: 'unifa-backend',
  description: 'Express Server used as API for the Unifa application',
  author: 'Jetro',
  repos: '',
  email: '',
  entities: [
    Type,
    User,
    Faculty,
    Classe,
    Course,
    ClasseCourse,
    Student,
    AcademicYear,
    Note,
  ]
};
