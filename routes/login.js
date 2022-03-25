var express = require('express');
var router = express.Router();
const pool = require('../database');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function (req, res, next) {
  bcrypt.hash('hemlis123', 10, function (err, hash) {
    console.log(hash);
    return res.json(hash);
    // Store hash in your password DB.
  });
});



module.exports = router;
