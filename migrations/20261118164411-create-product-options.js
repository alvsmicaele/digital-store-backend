
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_options', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },

      shape: {
        type: Sequelize.STRING(50),
        allowNull: true
      },

      radius: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

      type: {
        type: Sequelize.STRING(50),
        allowNull: true
      },

      values: {
        type: Sequelize.JSON,
        allowNull: false
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('product_options');
  }
};

