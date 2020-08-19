const Chapter = require('./chapter');
const Character = require('./character');
const Motive = require('./motive');
const Place = require('./place');
const Question = require('./question');
const Storytelling = require('./storytelling');
const Weapon = require('./weapon');

/* associations */

// chapter - storytelling
Chapter.hasMany(Storytelling, {
    as: 'storytelling',
    foreignKey: 'chapter_id'
});

Storytelling.belongsTo(Chapter, {
    as: 'chapter',
    foreignKey: 'chapter_id'
});

// character - motive
Character.hasOne(Motive, {
    as: 'motive',
    foreignKey: 'motive_id'
});

Motive.belongsTo(Character, {
    as: 'character',
    foreignKey: 'motive_id'
});

// character - weapon
Character.hasOne(Weapon, {
    as: 'weapon',
    foreignKey: 'weapon_id'
});

Weapon.belongsTo(Character, {
    as: 'character',
    foreignKey: 'weapon_id'
});

// place - character - question
Place.belongsToMany(Character, {
    through: 'place_character_question',
    as: 'character',
    foreignKey: 'place_id'
});

Character.belongsToMany(Place, {
    through: 'place_character_question',
    as: 'place',
    foreignKey: 'character_id'
});

Character.belongsToMany(Question, {
    through: 'place_character_question',
    as: 'question',
    foreignKey: 'character_id'
});

Question.belongsToMany(Character, {
    through: 'place_character_question',
    as: 'character',
    foreignKey: 'question_id'
});

Place.belongsToMany(Question, {
    through: 'place_character_question',
    as: 'question',
    foreignKey: 'place_id'
});

Question.belongsToMany(Place, {
    through: 'place_character_question',
    as: 'place',
    foreignKey: 'question_id'
});
