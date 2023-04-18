const nodemailer = require('nodemailer');
const pug = require('pug');
const { convert } = require('html-to-text');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_LOGIN,
    pass: process.env.GMAIL_PASSWORD,
  },
});

/** create reusable sendmail function 
@params {object} options - mail options (to, subject, text, html)
@params {function} callback - callback function to handle response
*/
const SENDMAIL = async (mailDetails, callback) => {
  try {
    console.log(`${__dirname}/../views/${mailDetails.template}.pug`);
    const html = pug.renderFile(`${__dirname}/../views/${mailDetails.template}.pug`, {
      firstName: mailDetails.firstName,
      subject: mailDetails.subject,
      size: mailDetails?.orderDetails?.size ?? 'standard',
    });

    const options = {
      from: 'Order <pizzadelivery@gmail.com>', // sender address
      to: mailDetails.to, // receiver email
      subject: mailDetails.subject,
      text: convert(html),
      html,
    };

    const info = await transporter.sendMail(options);
    callback(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = SENDMAIL;
