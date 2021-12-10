'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuario', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      celular: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: false
      },
      dataCriacao: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      dataAlteracao: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuario')
  }
}
