module.exports = {
  name: 'User',
  plural: 'Users',
  auth: ['email', 'password'],
  defaultAuth: 'jsethjetro@gmail.com',
  seedAmount: 100,
  fields: [
    {
      name: 'email',
      type: 'string',
      length: 100,
    },
    {
      name: 'password',
      type: 'string',
      length: 500,
    }
  ],
  relations: {
    belongsTo: ['Type']
  }
};