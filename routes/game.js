var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')
var multimediaController = require('../controllers/multimediaController')


router.get('/', gameController.getGame);
router.get('/:game_ID', gameController.getGameID);
router.get('/:game_ID/:multimedia', multimediaController.getImages)



module.exports = router;