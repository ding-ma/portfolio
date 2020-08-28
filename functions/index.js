const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const sgMail = require('@sendgrid/mail');

exports.contactMe = functions.https.onRequest((req, res) => {
  sgMail.setApiKey(functions.config().sendgrid.key);
  const { name, email, message, subject } = req.body;
  functions.logger.log("Contact into", req.body);

  try{
    return cors(req, res, () => {
      const text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Subject - ${subject || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
      const msg = {
        to: "ma.ding.dm@gmail.com",
        from: "no-reply@dingma.ca",
        subject: `${name} sent you a new message from dingma.ca`,
        text: text,
        html: text
      };
      sgMail.send(msg);
      res.status(200).send("success");
    })
  } catch (e) {
    res.status(500).send(e.getMessage);
  }
});

