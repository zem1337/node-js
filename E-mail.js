const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'azizzem@gmail.com',
    pass: 'wabalabadubdub123'
  }
});

const mailOptions = {
  from: 'azizzem@gmail.com',
  to: 'azizzem1337@gmail.com',
  subject: 'test',
  text: 'testing'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});