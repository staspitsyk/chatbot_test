const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class GroupItemsModel extends Model {}

const GroupItem = GroupItemsModel.init({
    groupId: { type: DataTypes.INTEGER },
    teacherId: { type: DataTypes.INTEGER }
}, { sequelize });

module.exports = GroupItem;