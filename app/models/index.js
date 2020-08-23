const Chapter = require("./chapter");
const Character = require("./character");
const Motive = require("./motive");
const Place = require("./place");
const Question = require("./question");
const Storytelling = require("./storytelling");
const Weapon = require("./weapon");
const Situation = require("./situation");

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

// question - chapter
Chapter.hasMany(Question, {
  as: "questions",
  foreignKey: "chapter_id",
});
Question.belongsTo(Chapter, {
  as: "chapter",
  foreignKey: "chapter_id",
});

// question - place
Place.hasMany(Question, {
  as: "questions",
  foreignKey: "place_id",
});
Question.belongsTo(Place, {
  as: "place",
  foreignKey: "place_id",
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

// ****** chapter_place_character ******** //
//chapter-place association
Place.belongsToMany(Chapter, {
  as: "chapter_p",
  through: "chapter_place_character",
  foreignKey: "place_id",
  otherKey: "chapter_id",
});
Chapter.belongsToMany(Place, {
  as: "places_c",
  through: "chapter_place_character",
  foreignKey: "chapter_id",
  otherKey: "place_id",
});

//chapter-character association
Chapter.belongsToMany(Character, {
  as: "characters_c",
  through: "chapter_place_character",
  foreignKey: "chapter_id",
  otherKey: "character_id",
});
Character.belongsToMany(Chapter, {
  as: "chapters_c",
  through: "chapter_place_character",
  foreignKey: "character_id",
  otherKey: "chapter_id",
});

//place-character association
Place.belongsToMany(Character, {
  as: "characters_p",
  through: "chapter_place_character",
  foreignKey: "place_id",
  otherKey: "character_id",
});
Character.belongsToMany(Place, {
  as: "places_char",
  through: "chapter_place_character",
  foreignKey: "character_id",
  otherKey: "place_id",
});

module.exports = { Chapter, Character, Motive, Place, Question, Storytelling, Situation };
