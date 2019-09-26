var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/server/routes/index');
var usersRouter = require('./src/server/routes/users');
var bodyParser = require('body-parser');
var index = require('./src/server/routes/index');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//serves static files from the React app
app.use(express.static(path.join(__dirname, '../..', 'build')));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);

app.use('/api', indexRouter);
app.use('/users', usersRouter);


app.get('/*', (req, res, next) => {
    res.sendFile(path.join((__dirname, '../..', 'build')))
});


app.listen(
  process.env.PORT || 5000,
  function () {
    console.log(`Frontend start on http://localhost:5000`)
  }
);
  
module.exports = app;
