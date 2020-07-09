module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    groupId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Groups',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Students'),
};
