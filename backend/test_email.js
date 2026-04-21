require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function testEmail() {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'try.venkatesh91@gmail.com',
      subject: `Test Portfolio Message`,
      text: `This is a test message to verify the email functionality works!\n\nName: Test User\nEmail: test@example.com\nMessage: The Nodemailer configuration is successful!`,
    };

    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

testEmail();
