const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model { };

User.init({
    pseudo: DataTypes.TEXT,
    mail: DataTypes.TEXT,
    pwd: DataTypes.TEXT
}, {
    sequelize,
    tableName: "user"
});

module.exports = User;