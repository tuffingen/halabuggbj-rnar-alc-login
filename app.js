var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
require('dotenv').config();
const nunjucks = require('nunjucks');
const session = require('express-session');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var secretRouter = require('./routes/secret');
var logoutRouter = require('./routes/logout');

var app = express();

app.use(logger('dev'));
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
app.use(session({
  secret: 'hemlig',
  resave: false,
  saveUninitialized: true,
  cookie: { sameSite: true }
}))

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/secret', secretRouter);
app.use('/logout', logoutRouter);

nunjucks.configure('views', {
  autoescape: true,
  express: app
});



module.exports = app;
