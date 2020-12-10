module.exports = {
  name: 'Classe',
  plural: 'Classes',
  seedAmount: 100,
  fields: [
    {
      name: 'name',
      type: 'string',
      length: 250,
    },
    {
      name: 'description',
      type: 'string',
      length: 250,
    }
  ],
  relations: {
    hasMany: [
      'Student',
      'Note'
    ],
    belongsTo: ['Faculty']
  }
};