const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Lessons extends Model {}

const LessonsModel = Lessons.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    topic: { type: DataTypes.STRING(), allowNull: true },
    teacherId: { type: DataTypes.INTEGER(), allowNull: false },
    groupId: { type: DataTypes.INTEGER(), allowNull: false },
    cabinet: { type: DataTypes.INTEGER(), allowNull: false },
    timeStart: { type: DataTypes.STRING(), allowNull: false },
    timeEnd: { type: DataTypes.STRING(), allowNull: false },
  },
  { sequelize },
);

module.exports = LessonsModel;
