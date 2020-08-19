const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Motive extends Model { };

Motive.init({
    description: DataTypes.TEXT
}, {
    sequelize,
    tableName: "motive"
});

module.exports = Motive;