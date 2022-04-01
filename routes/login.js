var express = require('express');
var router = express.Router();
const pool = require('../database');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  bcrypt.hash('hemlis123', 10, function (err, hash) {
    console.log(hash);
    let data= {
      layout: 'layout.njk'
    }
    res.render('login.njk', data);
    
    // Store hash in your password DB.
  });
});

router.post('/', async (req, res, next) => {
  // { "task": "koda post" }
      const username = req.body.name;
      const password = req.body.password;

      await pool.promise()
          .query('select * FROM user WHERE name = ?', [username])
          .then(([rows, fields]) => {
            if (rows.length === 0) {
              return res.send('Failed to login');
            }
            console.log(rows[0]);
            bcrypt.compare(password, rows[0].password, function(err,result) {
              console.log(result);
              if (result) {
                return res.redirect('/secret');
              } else {
                return res.send('Failed to login');
              }
            });
              
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({
                  task: {
                      error: 'Failed to login'
                  }
              })
          });
  



  // res.json(req.body);

});



module.exports = router;
