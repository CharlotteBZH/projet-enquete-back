const {
  Chapter,
  Place,
  Character,
  Question,
  Storytelling,
  Motive,
  Answer,
} = require("../models");

const playController = {
  // route : /play/:situationId
  getCharacterQuestionInChapter: async (req, res) => {
    try {
      const chapterId = req.params.chapterId;
      const placeId = req.params.placeId;
      console.log("toto", req.params);
      let chapter = await Chapter.findByPk(chapterId);
      if (!chapter) {
        res.status(404).json("Cant find chapter with id " + chapterId);
      }
      let place = await Place.findByPk(placeId, {
        include: [
          {
            association: "characters_p",
            include: [
              {
                association: "questions",
              },
            ],
          },
        ],
      });
      if (!place) {
        res.status(404).json("Cant find chapter with id " + placeId);
      } else {
        res.json(chapter.place);
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