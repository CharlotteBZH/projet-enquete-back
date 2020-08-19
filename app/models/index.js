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

// chapter - place - character - question

//chapter-place association

Place.belongsToMany(Chapter, {
    as: 'chapter_p',
    through: 'chapter_place_character_question',
    foreignKey: 'place_id',
    otherKey: 'chapter_id',

});

Chapter.belongsToMany(Place, {
    as: 'places_c',
    through: 'chapter_place_character_question',
    foreignKey: 'chapter_id',
    otherKey: 'place_id',
});

//chapter-character association

Chapter.belongsToMany(Character, {
    as: 'characters_c',
    through: 'chapter_place_character_question',
    foreignKey: 'chapter_id',
    otherKey: 'character_id',

});

Character.belongsToMany(Chapter, {
    as: 'chapters_c',
    through: 'chapter_place_character_question',
    foreignKey: 'character_id',
    otherKey: 'chapter_id',
});

//chapter-question association

Chapter.belongsToMany(Question, {
    as: 'questions_c',
    through: 'chapter_place_character_question',
    foreignKey: 'chapter_id',
    otherKey: 'question_id',
});

Question.belongsToMany(Chapter, {
    as: 'chapters_q',
    through: 'chapter_place_character_question',
    foreignKey: 'question_id',
    otherKey: 'chapter_id',
});



//place-character association

Place.belongsToMany(Character, {
    as: 'characters_p',
    through: 'chapter_place_character_question',
    foreignKey: 'place_id',
    otherKey: 'character_id',

});

Character.belongsToMany(Place, {
    as: 'places_char',
    through: 'chapter_place_character_question',
    foreignKey: 'character_id',
    otherKey: 'place_id',
});


//question-character association

Character.belongsToMany(Question, {
    as: 'questions_c',
    through: 'chapter_place_character_question',
    foreignKey: 'character_id',
    otherKey: 'question_id',
});

Question.belongsToMany(Character, {
    as: 'characters_q',
    through: 'chapter_place_character_question',
    foreignKey: 'question_id',
    otherKey: 'character_id',
});


//place-question association

Place.belongsToMany(Question, {
    as: 'questions_p',
    through: 'chapter_place_character_question',
    foreignKey: 'place_id',
    otherKey: 'question_id',
});

Question.belongsToMany(Place, {
    as: 'places_q',
    through: 'chapter_place_character_question',
    foreignKey: 'question_id',
    otherKey: 'place_id',
});
