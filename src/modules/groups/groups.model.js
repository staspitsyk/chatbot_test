const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

const GroupItems = require('./groups-item.model');
const Teachers = require('../teachers/teachers.model');
const Students = require('../students/students.model');
const Lessons = require('../lessons/lessons.model');

class GroupsModel extends Model {}

const Groups = GroupsModel.init(
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
  { sequelize }
);

Students.belongsTo( Groups, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' } );

Groups.hasMany( Students, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' } );

Lessons.belongsTo( Groups, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' } );

Lessons.belongsTo( Teachers, { foreignKeyConstraint: true, foreignKey: 'teacherId', targetKey: 'id' } );

GroupItems.belongsTo( Teachers, { foreignKeyConstraint: true, foreignKey: 'teacherId', targetKey: 'id' } );

GroupItems.belongsTo( Groups, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' } );

Groups.hasMany( GroupItems, { foreignKeyConstraint: true, foreignKey: 'groupId', targetKey: 'id' } );

Teachers.hasMany( GroupItems, { foreignKeyConstraint: true, foreignKey: 'teacherId', targetKey: 'id' } );

module.exports = Groups;

