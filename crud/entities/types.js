module.exports = {
  name: 'Type',
  plural: 'Types',
  seedAmount: 100,
  fields: [
    {
      name: 'name',
      type: 'string',
      length: 100,
    },
    {
      name: 'description',
      type: 'string',
      length: 255,
    }
  ],
  relations: {
    hasMany: [
      'User'
    ]
  }
};