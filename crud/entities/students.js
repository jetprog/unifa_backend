module.exports = {
  name: 'Student',
  plural: 'Students',
  seedAmount: 100,
  auth: ['code', 'password'],
  defaultAuth: 'FA-2020-20',
  fields: [
    {
      name: 'code',
      type: 'string',
      length: 50,
      unique: true
    },
    {
      name: 'nom',
      type: 'string',
      length: 100
    },
    {
      name: 'prenom',
      type: 'string',
      length: 250
    },
    {
      name: 'sexe',
      type: 'string',
      length: 1
    },
    {
      name: 'date_naissance',
      type: 'date',
    },
    {
      name: 'commentaire',
      type: 'text',
    },
    {
      name: 'picture',
      type: 'string',
      file: true,
    },
    {
      name: 'password',
      type: 'string',
      length: 500,
    },
    {
      name: 'isPayed',
      type: 'boolean',
    },
  ],
  relations: {
    belongsTo: ['Faculty', 'Classe']
  }
};