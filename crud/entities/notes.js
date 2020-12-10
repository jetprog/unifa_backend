module.exports = {
  name: 'Note',
  plural: 'Notes',
  seedAmount: 100,
  fields: [
    {
      name: 'session',
      type: 'enum',
    },
    {
      name: 'valeur',
      type: 'integer',
      length: 3
    },
    {
      name: 'coefficient',
      type: 'integer',
      length: 3
    },
  ],
  relations: {
    belongsTo: ['Student', 'Classe', 'AcademicYear', 'Course']
  }
};