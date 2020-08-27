const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key);


exports.contactMe = functions.https.onRequest((request, response) => {
  if(request.method !== "POST"){
    response.status(400).send('Please send a POST request');
    return;
  }
  let data = request.body;
  const msg = {
    to: 'ma.ding.dm@gmail.com',
    from: data["from"],
    subject: data["subject"],
    text: data["subject"],
  };
  sgMail.send(msg);
  response.status(200).send('Email sent!')
});
