'use strict';


// Twilio Credentials
const accountSid = 'AC0de2559e6b4e1a00039336d64ffa4cea';
const authToken = 'c9554ecc2a9ad6028790f1e58fc01232';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+2064984786',
    from: '+12068667510',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then((message) => console.log(message.sid));


// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');
// require('dotenv').load();
//
//
// var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);
// router.use(bodyParser.urlencoded({extended: true}));
// router.use(bodyParser.json());
//
// router.post('/', function(req, res) {
//   console.log('this is the req', req.body);
//   client.messages.creat({
//     to:'+2064984787',
//     from: process.env.MY_PHONE_NUMBER,
//     body:'hello World',
//   }, function(err, data) {
//     if (err) {
//       console.log('err', err);
//       console.log('data', data);
//     }
//   });//end of sendMessage
//   res.send(200);
// });
//
// module.exports = router;
