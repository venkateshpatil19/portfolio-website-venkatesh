const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    const [result] = await pool.execute(query, [name, email, message]);
    
    res.status(201).json({ success: true, message: 'Message saved successfully.' });
  } catch (error) {
    console.error('Database insertion error:', error);
    res.status(500).json({ success: false, error: 'Internal server error. Failed to save message.' });
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
