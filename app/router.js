const express = require('express');
// import of the controllers
const playController = require('./controllers/playController.js');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.send('hello');
});

router.get('/play/:chapterId/:placeId',playController.getCharacterQuestionInChapter);
//router.get('/play/:chapterId/:placeId/:storytellingId', playController.getGoodStorytelling);
router.get('/play',playController.getPlay);

router.use((req, res) => {
    res.status(404).send('Service does not exists\nSee : https://doc.localhost.api');
});

module.exports = router;