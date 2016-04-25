// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
// var TWILIO_ACCOUNT_SID = 'ACf1498c44a934ae86761bb641f42bf6d9';
// var TWILIO_AUTH_TOKEN = 'cf096143c469de88fb8aa46ba58bab30';

module.exports = {
    // Twilio Account SID - found on your dashboard
    // accountSid: process.env.TWILIO_ACCOUNT_SID,
    accountSid: 'ACf1498c44a934ae86761bb641f42bf6d9',
    //

    // Twilio Auth Token - found on your dashboard
    // authToken: process.env.TWILIO_AUTH_TOKEN,
    authToken: 'cf096143c469de88fb8aa46ba58bab30',

    // A Twilio number that you have purchased through the twilio.com web
    // interface or API
    // twilioNumber: process.env.TWILIO_NUMBER,
    twilioNumber: '+18622274198',
    // twilioNumber: process.env.'+18622274198',

    // The port your web application will run on
    port: process.env.PORT || 8008
};