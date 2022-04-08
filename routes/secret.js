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
    .query('SELECT meeps.*,user.name FROM meeps JOIN user ON user.id = meeps.user_id ORDER BY updated_at DESC;')
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

router.post('/', async (req, res, next) => {
  const body = req.body.body;
  const user_id = req.session.user_id;
  await pool.promise()
  .query('INSERT INTO meeps (body,user_id) VALUES (?,?)', [body,user_id])
  .then((response) => {
      console.log(response);
      if (response[0].affectedRows === 1) {
          res.redirect('/secret');
      } else {
          res.status(400).redirect('/secret');
      }
  })
  .catch(err => {
      console.log(err);
      res.redirect('/secret');
  });
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  if (isNaN(id)) {
      res.redirect('/secret/');
  } else {
      await pool.promise()
          .query('SELECT * FROM meeps JOIN user ON user.id = meeps.user_id WHERE meeps.id = ?', [id])
          .then(([rows, fields]) => {
              console.log(rows);
              let data = {
                  message: "He llo",
                  layout: 'layout.njk',
                  title: 'Nunjucks example',
                  items: rows,
                };
                res.render('meepedit.njk', data);
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({
                  videos: {
                      error: 'Error getting meeps'
                  }
              })
          });
  }
});

module.exports = router;
