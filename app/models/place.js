const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Place extends Model { };

Place.init({
    name: DataTypes.TEXT,
    picture: DataTypes.TEXT
}, {
    sequelize,
    tableName: "place"
});

module.exports = Place;