const express = require('express');
const { body, validationResult } = require('express-validator');
const Plan = require('../models/Plan');
const router = express.Router();

const validateJobData = [
  body('companyName').isLength({ min: 1 }),
  body('jobTitle').isLength({ min: 1 }),
  body('description').isLength({ min: 1 }),
  body('salary').isNumeric()
];

router.post('/create', validateJobData, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { companyName, jobTitle, description, salary } = req.body;

    const newJob = new Plan({
      companyName,
      jobTitle,
      description,
      salary
    });

    await newJob.save();

    res.status(201).json({ message: 'PLan created successfully' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Page not Found' });
  }
});

router.get('/getAll', async (req, res) => {
  try {
    const jobs = await Plan.find({}, 'companyName jobTitle description salary');
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Page not Found' });
  }
});

module.exports = router;

