const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config/config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('HELLO!');
});

var transport = {
  service: 'gmail',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name}\nemail: ${email}\nmessage: ${message} `

  var mail = {
    from: name,
    to: 'barisbcemail@gmail.com',
    subject: 'New Message from barisbc.com',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

router.post('/visited', (req, res, next) => {
  let time = req.body.timeSent
  var mail = {
    from: 'barisbc.com',
    to: 'barisbcemail@gmail.com',
    subject: 'Someone has visited your website!',
    text: 'time sent: ' + time
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;