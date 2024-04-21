
const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    console.error('Error fetching companies', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;



