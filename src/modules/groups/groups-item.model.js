const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class GroupsItemsModel extends Model {}

const GroupsItem = GroupsItemsModel.init({
    groupId: { type: DataTypes.INTEGER },
    teacherId: { type: DataTypes.INTEGER }
}, { sequelize });

module.exports = GroupsItem;