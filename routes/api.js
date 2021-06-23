var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')
var platformController = require('../controllers/platformController')

//GAME
router.get('/game', gameController.getGame);
router.get('/game/:game_ID', gameController.getGameID);

//PLATFORM
router.get('/platform', platformController.getPlatform);
router.get('/platform/:platform_ID', platformController.getPlatformID);


module.exports = router;