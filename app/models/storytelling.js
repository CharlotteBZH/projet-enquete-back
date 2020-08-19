const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Storytelling extends Model { };

Storytelling.init({
    sentence: DataTypes.TEXT
}, {
    sequelize,
    tableName: "storytelling"
});

module.exports = Storytelling;