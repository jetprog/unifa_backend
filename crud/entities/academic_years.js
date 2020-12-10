module.exports = {
  name: 'AcademicYear',
  plural: 'AcademicYears',
  seedAmount: 100,
  fields: [
    {
      name: 'debut',
      type: 'string',
      lenght: 4
    },
    {
      name: 'fin',
      type: 'string',
      lenght: 4
    }
  ],
  relations: {
    hasMany: [
      'Note'
    ]
  }
};