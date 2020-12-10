module.exports = {
  name: 'Course',
  plural: 'Courses',
  seedAmount: 100,
  fields: [
    {
      name: 'name',
      type: 'string',
      length: 150,
    },
    {
      name: 'description',
      type: 'string',
      length: 3
    }
  ],
  relations: {
    hasMany: [
      'ClasseCourse',
      'Note'
    ]
  }
};