'use strict';
//
// var accountSid = process.env.TWILIO_ACCOUNT_SID;
// var authToken = process.env.TWILIO_AUTH_TOKEN;
//
// var client = require ('twilio')(accountSid, authToken);//twilio rest client
//
// client.message.create({
//   to: '+2064984786',
//   from: process.env.MY_PHONE_NUMBER,//purchased twil number
//   body: 'Narcan needed! This is a test!',
// });
// .then((message) => console.log(message.sid));

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
require('dotenv').load();


var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', function(req, res) {
  console.log('this is the req', req.body);
  client.messages.creat({
    to:'+2064984787',
    from:'MY_PHONE_NUMBER',
    body:'hello World',
  }, function(err, data) {
    if (err) {
      console.log('err', err);
      console.log('data', data);
    }
  });//en d of sendMessage
  res.send(200);
});

module.exports = router;
