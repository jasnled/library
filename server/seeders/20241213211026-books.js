'use strict';

const dummyData= [{
  name: 'Journey to the East',
  author: 'Hermann Hesse',
  year_published: 1932
},
{
  name: 'The Hobbit',
  author: 'J.H.H Tolkein',
  year_published: 1937
},
{
  name: 'The Metamorphosis',
  author: 'Franz Kafka',
  year_published: 1915
},
{
  name: 'Atomic Habits:',
  author: 'James Clear',
  year_published: 2018
},
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', 
      dummyData
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {})
  }
};
