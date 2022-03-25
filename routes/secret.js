var express = require('express');
var router = express.Router();
const pool = require('../database');


/* GET users listing. */

router.get('/', async (req, res, next) => {
  await pool.promise()
    .query('SELECT * FROM user')
    .then(([rows, fields]) => {
      res.render('secret.njk', {
        items: rows,
        title: 'secret',
        layout: 'layout.njk'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        tasks: {
          error: 'Error getting tasks'
        }
      })
    });
});

module.exports = router;
