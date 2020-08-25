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
Question.getForSituationAndCharacter = async (SituationId, CharacterIds) => {
    return Question.findAll({where : {
        situation_id: SituationId,
        character_id: CharacterIds,
    }, raw: true})
    //return sequelize.query(`SELECT * FROM question WHERE situation_id = ${SituationId} AND character_id = ${ChacterId};`);
}

module.exports = Question;