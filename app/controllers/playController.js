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
  // route : /play/situation/:situationId
  getCharacterQuestionInChapter: async (req, res) => {
    try {
      const situationId = req.params.situationId;
      let situation = await Situation.findByPk(situationId);
      if (!situation) {
        res.status(404).json("Cant find situation with id " + situationId);
      }
      let characters= await Character.findAll({
        attributes:['id'],
        raw:true});
      console.log(characters);
      //pb de conversion ici des characters pour le tableau en second argument
      let questionList = await Question.getForSituationAndCharacter(situationId, [1,2,3]);
      console.log(questionList);
      res.status(200).json("ok");

    } catch (error) {
      res.status(500).json(error);
    }
  },

  // route : /play/storytelling/:chapterId
  getStory: async (req, res) => {
    try {
      const chapterId = req.params.chapterId;
      console.log("chapter",chapterId) 
      let chapter = await Chapter.findByPk(chapterId); 
    if (!chapter) {
      res.status(404).json("Cant find chapter with id " + chapterId);
      } else {
        let storytelling = await Storytelling.findAll({
          where : {
            chapter_id: chapterId,
      }, raw: true});
      console.log("story",storytelling) 
      res.status(200).json("ok");
      }
    } catch (error) {
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


/*getPlay: async (req, res) => {
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
},*/