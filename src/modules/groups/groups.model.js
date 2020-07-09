const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

const GroupItems = require('./groups-item.model');
const Teachers = require('../teachers/teachers.model');
const Students = require('../students/students.model');
const Lessons = require('../lessons/lessons.model');

class Groups extends Model {}

const GroupsModel = Groups.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    groupName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  { sequelize },
);

Students.belongsTo(GroupsModel, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' });

GroupsModel.hasMany(Students, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' });

Lessons.belongsTo(GroupsModel, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' });

Lessons.belongsTo(Teachers, { foreignKeyConstraint: true, foreignKey: 'teacherId', targetKey: 'id' });

GroupItems.belongsTo(Teachers, { foreignKeyConstraint: true, foreignKey: 'teacherId', targetKey: 'id' });

GroupItems.belongsTo(GroupsModel, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' });

GroupsModel.hasMany(GroupItems, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' });

Teachers.hasMany(GroupItems, { foreignKeyConstraint: true, foreignKey: 'teacherId', targetKey: 'id' });

module.exports = GroupsModel;
