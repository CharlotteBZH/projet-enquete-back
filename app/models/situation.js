const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Situation extends Model { };

Situation.init({
    
}, {
    sequelize,
    tableName: "Situation"
});

module.exports = Situation;