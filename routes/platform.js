var express = require('express');
var router = express.Router();
var platformController = require('../controllers/platformController')

router.get('/', platformController.getPlatform);
router.get('/:platform_ID', platformController.getPlatformID);

module.exports = router;