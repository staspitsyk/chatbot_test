'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topic: { type: Sequelize.STRING },
      teacherId: { type: Sequelize.INTEGER,
        references: {
          model: 'Teachers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
       },
      groupId: { type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
       },
      cabinet: { type: Sequelize.INTEGER },
      timeStart: { type: Sequelize.STRING },
      timeEnd: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lessons');
  }
};