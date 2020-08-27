const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key);


exports.contactMe = functions.https.onRequest((request, response) => {
  if (request.method !== "POST") {
    return response.status(400).send('Please send a POST request');
  }
  return cors(request, response, () => {
    let data = request.body;
    const msg = {
      to: 'ma.ding.dm@gmail.com',
      from: 'contact.me@portfolio-ding.firebaseapp.com',
      subject: data["subject"],
      text: data["msg"],
    };
    sgMail.send(msg);
    return response.status(200).send('Email sent!')
  })
});
