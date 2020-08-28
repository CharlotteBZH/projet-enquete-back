const {
  Chapter,
  Place,
  Character,
  Question,
  Storytelling,
  Motive,
  Answer,
  Situation,
  Situation_character
} = require("../models");

const playController = {
  // route : /play/question/:situationId
  getCharacterQuestionInChapter: async (req, res) => {
    try {
      const situationId = Number(req.params.situationId);
      let situation = await Situation.findByPk(situationId);
      if (!situation) {
        res.status(404).json("Cant find situation with id " + situationId);
      }
      let characters = await Character.findAll({
        attributes: ['id'],
        raw: true
      });
      characters = characters.map((character) => character.id);
      console.log(characters);
      //pb de conversion ici des characters pour le tableau en second argument
      let questionList = await Question.getForSituationAndCharacter(situationId, characters);
      console.log(questionList);
      res.status(200).json("ok");

    } catch (error) {
      res.status(500).json(error);
    }
  },

  // route : /play/situation/:chapterId

  getSituation: async (req, res) => {
    try {
      const chapterId = Number(req.params.chapterId);
      console.log("chapter", chapterId)
      let chapter = await Chapter.findByPk(chapterId);
      if (!chapter) {
        res.status(404).json("Cant find chapter with id " + chapterId);
      } else {
        let situation = await Situation.findAll({
          where: {
            chapter_id: chapterId,
          },
          include: ['place'],
          raw: true
        });
        console.log(situation)
        res.status(200).json(situation);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // route : /play/storytelling/:chapterId
  getStory: async (req, res) => {
    try {
      const chapterId = req.params.chapterId;
      console.log("chapter", chapterId)
      let chapter = await Chapter.findByPk(chapterId);
      if (!chapter) {
        res.status(404).json("Cant find chapter with id " + chapterId);
      } else {
        let storytelling = await Storytelling.findAll({
          where: {
            chapter_id: chapterId,
          }, raw: true
        });
        console.log("story", storytelling)
        res.status(200).json("ok");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // route : /play/situation/:situationId
  /*getSituationld: async (req, res) => {
    try {
      const situationId = req.params.situationId;
      let situation = await Situation.findByPk(situationId, {
        raw: true,
        //include:['places_c']
      });
      if (!situation) {
        res.status(404).json("Cant find situation with id " + situationId);
      } else {
        console.log(situation) 
        res.status(200).json("ok");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },*/

  // route : /play/character/:characterId
  getCharacter: async (req, res) => {
    try {
      const characterId = req.params.characterId;
      let character = await Character.findByPk(characterId, { raw: true });
      if (!character) {
        res.status(404).json("Cant find character with id " + characterId);
      } else {
        console.log(character)
        res.status(200).json("ok");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

};

module.exports = playController;




