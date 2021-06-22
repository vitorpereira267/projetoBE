var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController')

router.get('/', personController.getPersons);

router.post('/', personController.postPersons);

router.delete('/', personController.deletePersons);

router.put('/:id', personController.putPersons);

module.exports = router;