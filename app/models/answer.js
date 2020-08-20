const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Answer extends Model { };

Answer.init({
    description: DataTypes.TEXT
}, {
    sequelize,
    tableName: "answer"
});

module.exports = Answer;