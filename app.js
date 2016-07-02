var express = require ('express');
var app = express();
var port = process.env.PORT || 8008;
// var port = process.env.PORT || 8008;  // inside config.js
app.use(express.static(__dirname + '/public'));
app.listen(port);

//below is a function for making Twilio text messages
var sendText = function (req, res, next) {
    // this function for sending text for one person only...
   var config = require('./config');
   var port = config.port
   var twilio = require('twilio');
   var client = new twilio.RestClient(config.accountSid, config.authToken);
   // Create a new REST API client to make authenticated requests against the
   // twilio back end
   var textNumber = '+13476785225';
   var textMessage = 'Hello!  Warm regards from Rod!'
   // Setting destination number and text body
   var textObject = {to:textNumber,from:config.twilioNumber,body:textMessage};
   // Pass in parameters to the REST API using an object literal notation. The
   // REST client will handle authentication and response serialzation for you.
   client.sms.messages.create(textObject, function(error, message) {
      // The HTTP request to Twilio will run asynchronously. This callback
      // function will be called when a response is received from Twilio
      // The "error" variable will contain error information, if any.
      // If the request was successful, this value will be "falsy"
      if (!error) {
         // The second argument to the callback will contain the information
         // sent back by Twilio for the request. In this case, it is the
         // information about the text messsage you just sent:
         console.log('Success! The SID for this SMS message is:');
         console.log(message.sid);
 
         console.log('Message sent on:');
         console.log(message.dateCreated);
      } else {
        console.log('Oops! There was an error.');
      }
});
console.log('Hello one more time!'); // this is sent to the cmd console!
next();
};        // end of callKatie function

app.use(sendText);
app.get('/sendSMS', function (req, res) {
  res.send('Hello There!  Everytime you refresh your browser, you will receive a text!'); // this is sent to the Browser!
});
