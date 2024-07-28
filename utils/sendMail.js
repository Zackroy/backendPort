const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: process.env.SMTP_SERVICE,
  port: 465, 
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMailUser(name, email, description) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: "aloksingh291099@gmail.com", // list of receivers
    subject: "From Portfolio", // Subject line
    text: `${email}` + "\n" + description
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = sendMailUser;