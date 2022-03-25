var express = require('express');
var router = express.Router();
const pool = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('denied', { title: 'Express' });
});

module.exports = router;
