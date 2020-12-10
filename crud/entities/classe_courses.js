module.exports = {
  name: 'ClasseCourse',
  plural: 'ClasseCourses',
  seedAmount: 100,
  fields: [
    {
      name: 'description',
      type: 'string',
      lenght: 250
    },
  ],
  relations: {
    belongsTo: ['Classe', 'Course']
  }
};