var express = require('express');
var router = express.Router();
const pool = require('../database');


/* GET users listing. */

router.get('/', async (req, res, next) => {
  const username = req.session.username;
  if (username == undefined) {
    return res.redirect('/');
  }
  await pool.promise()
    .query('SELECT * FROM user WHERE name = ? ', [username])
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
