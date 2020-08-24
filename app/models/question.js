const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
class Question extends Model { };

Question.init({
    description: DataTypes.TEXT,
    answer: DataTypes.TEXT
}, {
    sequelize,
    tableName: "question"
});

module.exports = Question;