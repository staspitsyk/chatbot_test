const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class GroupItems extends Model {}

const GroupItemModel = GroupItems.init({
    groupId: { type: DataTypes.INTEGER },
    teacherId: { type: DataTypes.INTEGER }
}, { sequelize });

module.exports = GroupItemModel;