const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  sgMail.setApiKey(functions.config().sendgrid.key);
  const msg = {
    to: 'ma.ding.dm@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  response.send("Email sent");
});
