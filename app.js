var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
require('dotenv').config();


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var secretRouter = require('./routes/secret');

const nunjucks = require('nunjucks');
const bcrypt = require('bcrypt');




var app = express();

app.use(logger('dev'));
app.use(bcrypt());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/secret', secretRouter);

nunjucks.configure('views', {
  autoescape: true,
  express: app
});



module.exports = app;
