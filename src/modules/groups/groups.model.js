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
    firstName: { type: DataTypes.STRING(), allowNull: false },
    lastName: { type: DataTypes.STRING(), allowNull: false },
    email: { type: DataTypes.STRING(), allowNull: true },
    phoneNumber: { type: DataTypes.STRING(), allowNull: true },
    password: { type: DataTypes.STRING(), allowNull: false },
  },
  { sequelize }
);

module.exports = Groups;
