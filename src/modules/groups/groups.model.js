const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

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

module.exports = Groups;
