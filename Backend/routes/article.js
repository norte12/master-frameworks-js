'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

router.post('/datos-curso', ArticleController.test);
router.get('/test-de-controlador', ArticleController.test);

module.exports = router;