const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Weapon extends Model { };

Weapon.init({
    name: DataTypes.TEXT
}, {
    sequelize,
    tableName: "weapon"
});

module.exports = Weapon;