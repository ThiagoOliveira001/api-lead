'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario', [
      {
        id: 1,
        nome: 'Jhon Doe',
        email: 'jhon.doe@mail.com',
        celular: '16111111112',
        dataCriacao: new Date(),
        dataAlteracao: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
  }
}
