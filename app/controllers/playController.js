const {
  Chapter,
  Place,
  Character,
  Question,
  Storytelling,
  Motive,
  Answer,
  Situation
} = require("../models");

const playController = {
  // route : /play/:situationId
  getCharacterQuestionInChapter: async (req, res) => {
    try {
      const situationId = req.params.situationId;
      console.log("toto", req.params);
      let situation = await Situation.findByPk(situationId);
      if (!situation) {
        res.status(404).json("Cant find situation with id " + situationId);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  getPlay: async (req, res) => {
    console.log("test");
    try {
      let chapter = await Chapter.findAll();
      if (!chapter) {
        res.status(404).json("Cant find chapter with id " + chapterId);
      } else {
        res.json(place);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};
//route : play/chapter/place/character/question
module.exports = playController;

/* routes
/play/:chapterId/:placeId
=> find by pk pour chapter et place
=> dans place faire 2 include de character + question 
/play/:chapterId/:placeId/:storytellingId
=> find by pk pour chapter et place
=> findall du storytelling
/play/
*/