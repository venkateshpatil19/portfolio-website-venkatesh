const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const nodemailer = require('nodemailer');

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post('/', async (req, res) => {
  console.log("Incoming request:", req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    // 1. Save to database
    const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    await pool.execute(query, [name, email, message]);
    
    // 2. Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'try.venkatesh91@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: 'Message saved and email sent successfully.' });
  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).json({ success: false, error: 'Internal server error. Failed to process message.' });
  }
});

// GET /api/contact - View all entries (For testing/admin purposes)
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM contact_messages ORDER BY created_at DESC';
    const [rows] = await pool.execute(query);
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Database fetch error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch messages. Check database connection.' });
  }
});

module.exports = router;
