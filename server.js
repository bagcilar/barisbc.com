const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const emailRouter = require('./src/server/routes/email');
const domainRouter = require('./src/server/routes/domain');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//serves static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/email', emailRouter);
app.use('/domainFinder', domainRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build'));
});

app.listen(
  process.env.PORT || 8080,
  function () {
    console.log(`Frontend start on http://localhost:8080`)
  }
);
  
module.exports = app;