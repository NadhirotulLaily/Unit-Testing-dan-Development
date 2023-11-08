'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employments', [{
      nama: 'Bambang',
      field: 'Architect',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Mawar',
      field: 'Engineer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Joko',
      field: 'Supervisor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Budi',
      field: 'Engineer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Upin',
      field: 'Estimator',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Ipin',
      field: 'Subcontractor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Rara',
      field: 'Supervisor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Linda',
      field: 'Architect',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Mamat',
      field: 'Construction Worker',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Iqbaal',
      field: 'Surveyor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Desta',
      field: 'Electrician',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employments', null, {});
  }
};
