const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Chapters extends Model { };

Chapters.init({
    name: DataTypes.TEXT
}, {
    sequelize,
    tableName: "chapter"
});

module.exports = Chapters;