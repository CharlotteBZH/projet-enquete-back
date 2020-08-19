const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Chapter extends Model { };

Chapter.init({
    name: DataTypes.TEXT
}, {
    sequelize,
    tableName: "chapter"
});

module.exports = Chapter;