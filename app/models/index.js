const Chapter = require("./chapter");
const Character = require("./character");
const Motive = require("./motive");
const Place = require("./place");
const Question = require("./question");
const Storytelling = require("./storytelling");
const Weapon = require("./weapon");
const Situation = require("./situation");
const Situation_character = require("./situation_character");

/* associations */

// chapter - storytelling
Chapter.hasMany(Storytelling, {
  as: "storytelling",
  foreignKey: "chapter_id",
});
Storytelling.belongsTo(Chapter, {
  as: "chapter",
  foreignKey: "chapter_id",
});

// character - motive
Character.hasOne(Motive, {
  as: "motive",
  foreignKey: "motive_id",
});
Motive.belongsTo(Character, {
  as: "character",
  foreignKey: "character_id",
});

// character - weapon
Character.hasOne(Weapon, {
  as: "weapon",
  foreignKey: "weapon_id",
});
Weapon.belongsTo(Character, {
  as: "character",
  foreignKey: "character_id",
});


// question - situation
Situation.hasMany(Question, {
  as: "questions",
  foreignKey: "situation_id",
});
Question.belongsTo(Situation, {
  as: "situation",
  foreignKey: "situation_id",
});


// question - character
Character.hasMany(Question, {
  as: "questions",
  foreignKey: "character_id",
});
Question.belongsTo(Character, {
  as: "character",
  foreignKey: "character_id",
});



// ****** tables d'associations ******** //

//chapter-place association =>Situation

//place-situation
Place.hasMany(Situation, {
  as: "situations",
  foreignKey: "place_id",
});
Situation.belongsTo(Place, {
  as: "place",
  foreignKey: "place_id",
});

//chapter-situation
Chapter.hasMany(Situation, {
  as: "situations",
  foreignKey: "chapter_id",
});
Situation.belongsTo(Chapter, {
  as: "chapter",
  foreignKey: "chapter_id",
});



//character-situation_character
Character.hasMany(Situation_character, {
  as: "situation_characters",
  foreignKey: "character_id",
});
Situation_character.belongsTo(Character, {
  as: "character",
  foreignKey: "character_id",
});

//situation-situation_character
Situation.hasMany(Situation_character, {
  as: "situation_characters",
  foreignKey: "situation_id",
});
Situation_character.belongsTo(Situation, {
  as: "situation",
  foreignKey: "situation_id",
});

//Situation-character association
Situation.belongsToMany(Character, {
  as: "characters_c",
  through: "situation_character",
  foreignKey: "situation_id",
  otherKey: "character_id",
});
Character.belongsToMany(Situation, {
  as: "situations_c",
  through: "situation_character",
  foreignKey: "character_id",
  otherKey: "situation_id",
});



module.exports = { Chapter, Character, Motive, Place, Question, Storytelling, Situation, Situation_character };
