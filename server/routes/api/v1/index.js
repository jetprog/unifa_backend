var express = require('express');
var router = express.Router();

// token authorization
const { verifyToken } = require('../../../middlewares/authorization');

// Import Multer Factory
const MulterFactory = require('../../MulterFactory');

// Declare Controllers
// Auth Controller
const AuthController = require('../../../controllers/v1/Auth');

// Other Controllers
const TestController = require('../../../controllers/v1/Test');
const TypeController = require('../../../controllers/v1/Type');
const UserController = require('../../../controllers/v1/User');
const FacultyController = require('../../../controllers/v1/Faculty');
const ClasseController = require('../../../controllers/v1/Classe');
const CourseController = require('../../../controllers/v1/Course');
const ClasseCourseController = require('../../../controllers/v1/ClasseCourse');
const StudentController = require('../../../controllers/v1/Student');
const AcademicYearController = require('../../../controllers/v1/AcademicYear');
const NoteController = require('../../../controllers/v1/Note');


// Create Multers for file uploading
const studentMulter = MulterFactory.create('student');


// Instanciate Controllers
const test = new TestController();
const type = new TypeController();
const auth = new AuthController();
const user = new UserController();
const faculty = new FacultyController();
const classe = new ClasseController();
const course = new CourseController();
const classeCourse = new ClasseCourseController();
const student = new StudentController();
const academicYear = new AcademicYearController();
const note = new NoteController();


router.get('/', function(req, res) {
  console.log('unifa-backend API v1');
  res
    .status(200)
    .send({ status: 'Success', api: 'Version 1' })
});

// endpoint for authentication
router.get('/auth', verifyToken, auth.auth.bind(auth));
router.post('/signin', auth.signin.bind(auth));
router.post('/signup', auth.signup.bind(auth));

router.post('/signin/admin', auth.signinAdmin.bind(auth));
router.post('/signup/admin', auth.signupAdmin.bind(auth));


// endpoint for testing API Flow with Versions, should return api v1
router.get('/tests', test.check.bind(test));

// endpoint for types (CRUD)
router.get('/types', verifyToken, type.all.bind(type));
router.get('/types/:id', verifyToken, type.find.bind(type));
router.post('/types', verifyToken, type.insert.bind(type));
router.put('/types/:id', verifyToken, type.update.bind(type));
router.delete('/types/:id', verifyToken, type.delete.bind(type));

// endpoint for users (CRUD)
router.get('/users', verifyToken, user.all.bind(user));
router.get('/users/:id', verifyToken, user.find.bind(user));
router.post('/users', verifyToken, user.insert.bind(user));
router.put('/users/:id', verifyToken, user.update.bind(user));
router.delete('/users/:id', verifyToken, user.delete.bind(user));

// endpoint for faculties (CRUD)
router.get('/faculties', verifyToken, faculty.all.bind(faculty));
router.get('/faculties/:id', verifyToken, faculty.find.bind(faculty));
router.post('/faculties', verifyToken, faculty.insert.bind(faculty));
router.put('/faculties/:id', verifyToken, faculty.update.bind(faculty));
router.delete('/faculties/:id', verifyToken, faculty.delete.bind(faculty));

// endpoint for classes (CRUD)
router.get('/classes', verifyToken, classe.all.bind(classe));
router.get('/classes/:id', verifyToken, classe.find.bind(classe));
router.post('/classes', verifyToken, classe.insert.bind(classe));
router.put('/classes/:id', verifyToken, classe.update.bind(classe));
router.delete('/classes/:id', verifyToken, classe.delete.bind(classe));

// endpoint for courses (CRUD)
router.get('/courses', verifyToken, course.all.bind(course));
router.get('/courses/:id', verifyToken, course.find.bind(course));
router.post('/courses', verifyToken, course.insert.bind(course));
router.put('/courses/:id', verifyToken, course.update.bind(course));
router.delete('/courses/:id', verifyToken, course.delete.bind(course));

// endpoint for classe-courses (CRUD)
router.get('/classe-courses', verifyToken, classeCourse.all.bind(classeCourse));
router.get('/classe-courses/:id', verifyToken, classeCourse.find.bind(classeCourse));
router.post('/classe-courses', verifyToken, classeCourse.insert.bind(classeCourse));
router.put('/classe-courses/:id', verifyToken, classeCourse.update.bind(classeCourse));
router.delete('/classe-courses/:id', verifyToken, classeCourse.delete.bind(classeCourse));

// endpoint for students (CRUD)
router.get('/students', student.all.bind(student));
router.get('/students/:id', verifyToken, student.find.bind(student));
router.get('/students/code/:code', student.findCode.bind(student));
router.post(
  '/students',
  verifyToken,
  studentMulter.fields([{ name: 'picture' }]),
  student.insert.bind(student)
);
router.put(
  '/students/:id',
  verifyToken,
  studentMulter.fields([{ name: 'picture' }]),
  student.update.bind(student)
);
router.delete('/students/:id', verifyToken, student.delete.bind(student));

// endpoint for academic-years (CRUD)
router.get('/academic-years', verifyToken, academicYear.all.bind(academicYear));
router.get('/academic-years/:id', verifyToken, academicYear.find.bind(academicYear));
router.post('/academic-years', verifyToken, academicYear.insert.bind(academicYear));
router.put('/academic-years/:id', verifyToken, academicYear.update.bind(academicYear));
router.delete('/academic-years/:id', verifyToken, academicYear.delete.bind(academicYear));

// endpoint for notes (CRUD)
router.get('/notes', note.all.bind(note));
router.get('/notes/:id', verifyToken, note.find.bind(note));
router.post('/notes', note.insert.bind(note));
router.put('/notes/:id', verifyToken, note.update.bind(note));
router.delete('/notes/:id', note.delete.bind(note));


module.exports = router;
