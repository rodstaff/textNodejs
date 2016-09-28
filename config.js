// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)

var TWILIO_ACCOUNT_SID;
var TWILIO_AUTH_TOKEN;
var TWILIO_NUMBER

module.exports = {
    // Twilio Account SID - found on your dashboard
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    // accountSid: TWILIO_ACCOUNT_SID,
    // Twilio Auth Token - found on your dashboard
    authToken: process.env.TWILIO_AUTH_TOKEN,
    // authToken: TWILIO_AUTH_TOKEN,

    // A Twilio number that you have purchased through the twilio.com web
    // interface or API
    twilioNumber: process.env.TWILIO_NUMBER,
    // twilioNumber: TWILIO_NUMBER,
    // The port your web application will run on
    // port: process.env.PORT || 8008
};