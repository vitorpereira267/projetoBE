var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')

/* GET users listing. */
router.get('/', gameController.getGame);
router.get('/:game_ID', gameController.getGameID);

module.exports = router;