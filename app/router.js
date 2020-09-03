const express = require('express');
// import of the controllers
const playController = require('./controllers/playController.js');
const userController = require('./controllers/userController.js');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.send('hello');
});

//play
router.get('/play/situation/:chapterId', playController.getSituation);
router.get('/play/storytelling/:chapterId', playController.getStory);
router.get('/play/question/:situationId', playController.getCharacterQuestionInChapter);
router.get('/play/character/:situation_characterId', playController.getCharacter);


//inscription
router.post('/logon', userController.logonPlayer);

//connexion
router.post('/login', userController.loginPlayer);
//router.post('/isLogged', userController.checkIflogged);

//deconnexion
router.post('/logout', userController.logoutPlayer);

router.use((req, res) => {
    res.status(404).send('Service does not exists\nSee : https://doc.localhost.api');
});

module.exports = router;