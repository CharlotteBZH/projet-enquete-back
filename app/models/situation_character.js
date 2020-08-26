const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Situation_character extends Model { };

Situation_character.init({
    
}, {
    sequelize,
    tableName: "situation_character"
});

module.exports = Situation_character;