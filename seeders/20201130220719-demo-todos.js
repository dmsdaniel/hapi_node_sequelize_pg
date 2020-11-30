'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Title 1',
        description: 'Descricao1',
        createdAt: new Date(),
        updatedAt: new Date(),
        novo: 'Novo1'
      },
      {
        title: 'Title 2',
        description: 'Descricao2',
        createdAt: new Date(),
        updatedAt: new Date(),
        novo: 'Novo1'
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
