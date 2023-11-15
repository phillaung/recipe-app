var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('../config/ensureLoggedIn');
var recipesCtrl = require('../controllers/recipes')

router.get('/', ensureLoggedIn, recipesCtrl.index);

module.exports = router;