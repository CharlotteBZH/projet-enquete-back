const express = require('express');

// import of the controllers
const playController = require('./controllers/playController.js');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.send('hello');
});

router.get('/play/id:chapter/id:place/id:storytelling', playController.getGoodStorytelling);

router.use((req, res) => {
    res.status(404).send('Service does not exists\nSee : https://doc.localhost.api');
});



module.exports = router;