const { Chapter, Place, Character, Question, Storytelling, Motive, Answer } = require('../models');
/* routes
/play/:chapterId/:placeId
=> find by pk pour chapter et place
=> dans place faire 2 include de character + question 
/play/:chapterId/:placeId/:storytellingId
=> find by pk pour chapter et place
=> findall du storytelling
/play/
*/
const playController = {
  // route : /play/:chapterId/:placeId
  getCharacterQuestionInChapter: async (req, res) => {
    try {
      const { chapterId, placeId } = req.params.id;
      let chapter = await Chapter.findByPk(chapterId, {
        include: [{
          association: 'places_c',
          include: [{
            association: 'characters_p',
            include: [{
              association: 'questions',
            }]
          }]
        }]
      });
      if (!chapter) {
        res.status(404).json('Cant find chapter with id ' + chapterId);
      } else {
        res.json(chapter.places_c);
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
      res.status(404).json('Cant find chapter with id ' + chapterId);
    } else {
      res.json(chapter);
    }
  } catch (error) {
    console.trace(error);
    res.status(500).json(error);
  }
},
/*
const playController = {
  //route : /play/:chapterId/:placeId/:storytellingId
  getGoodStorytelling: async (req, res) => {
    try {
      const { chapterId, placeId, storytellingId } = req.params;
      let chapter = await Chapter.findByPk(chapterId);
      if (!chapter) {
        res.status(404).json('Cant find chapter with id ' + chapterId);
      }
      let place = await Place.findByPk(placeId);
      if (!place) {
        res.status(404).json('Cant find place with id ' + placeId);
      }
      let storytelling = await Storytelling.findByPk(storytellingId);
      if (!storytelling) {
        res.status(404).json('Cant find storytelling with id ' + storytellingId);
      }
      res.json(storytelling);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getGoodQuestion: async (req, res) => {
    try {
      // route : /play/:chapterId/:placeId/:characterId/:questionId
      const { chapterId, placeId, characterId, questionId } = req.params;
      let chapter = await Chapter.findByPk(chapterId);
      if (!chapter) {
        res.status(404).json('Cant find chapter with id ' + chapterId);
      }
      let place = await Place.findByPk(placeId);
      if (!place) {
        res.status(404).json('Cant find place with id ' + placeId);
      }
      let character = await Character.findByPk(characterId);
      if (!character) {
        res.status(404).json('Cant find character with id ' + characterId);
      }
      let question = await Question.findByPk(questionId);
      if (!question) {
        res.status(404).json('Cant find question with id ' + questionId);
      }
      res.json(question);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getGoodAnswer: async (req, res) => {
    try {
      // route : /play/:chapterId/:placeId/:characterId/:questionId/:answerId
      const { chapterId, placeId, characterId, questionId, answerId } = req.params;
      let chapter = await Chapter.findByPk(chapterId);
      if (!chapter) {
        res.status(404).json('Cant find chapter with id ' + chapterId);
      }
      let place = await Place.findByPk(placeId);
      if (!place) {
        res.status(404).json('Cant find place with id ' + placeId);
      }
      let character = await Character.findByPk(characterId);
      if (!character) {
        res.status(404).json('Cant find character with id ' + characterId);
      }
      let question = await Question.findByPk(questionId);
      if (!question) {
        res.status(404).json('Cant find question with id ' + questionId);
      }
      let answer = await Answer.findByPk(answerId);
      if (!answer) {
        res.status(404).json('Cant find answer with id ' + answerId);
      }
      res.json(question);
    } catch (error) {
      res.status(500).json(error);
    }
  },
}
*/
//prise d'exemple ci-dessous   
/*removeTagFromCard: async (req, res) => {
    try {
      const { cardId, tagId } = req.params;
      let card = await Card.findByPk(cardId);
      if (!card) {
        return res.status(404).json('Can not find card with id ' + cardId);
      }
      let tag = await Tag.findByPk(tagId);
      if (!tag) {
        return res.status(404).json('Can not find tag with id ' + tagId);
      }
      await card.removeTag(tag);
      card = await Card.findByPk(cardId, {
        include: ['tags']
      });
      res.json(card);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  }*/
//route : play/chapter/place/character/answer
// j'avais fait le code ci-dessous mais ça ne convient pas dans notre cas, car ici nous optiendrons à la fois 
//toutes les place d'un chapitre avec tous les character correspondant ainsi que toutes les question à la fois
//alors que nous souhaitons en donnant en param un id pouvoir optenir 1 question précise posé par 1 seul character 
//quand il se situe dans un endroit précis, dans un chapitre donné.
/*getCharacterQuestionInChapter: async(req, res) => {
    try {
        const chapterId = req.params.id;
        const placeId = req.params.id;
        const chapter = await Chapter.findByPk(chapterId, {
          include: [{
            association: 'places_c',
            include: [{
                association : 'character_p',
                include: [{
                    association : 'question_c',
                }]
            }]
          }]
        });
        if (!chapter) {
          res.status(404).json('Cant find chapter with id ' + chapterId);
        } else {
          res.json(chapter.places_c);
        }
      } catch (error) {
        console.trace(error);
        res.status(500).json(error);
      }
    },
     */
}
//route : play/chapter/place/character/question
module.exports = playController;