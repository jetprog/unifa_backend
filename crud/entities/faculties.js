module.exports = {
  name: 'Faculty',
  plural: 'Faculties',
  seedAmount: 100,
  fields: [
    {
      name: 'name',
      type: 'string',
      length: 250,
    },
    {
      name: 'sigle',
      type: 'string',
      length: 255,
    },
    {
      name: 'duration',
      type: 'string',
      length: 100,
    },
  ],
  relations: {
    hasMany: [
      'Student',
      'Classe'
    ]
  }
};