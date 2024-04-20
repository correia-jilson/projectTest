const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

const validateUserData = [
  body('email').isEmail(),
  body('fullName').isLength({ min: 1 }),
  body('password').isStrongPassword(),
  body('role').isLength({ min: 1 }),
];


async function getNextUserId() {
  try {
    const highestUser = await User.findOne({}, {}, { sort: { 'userId': -1 } });
    if (highestUser) {
      return highestUser.userId + 1;
    } else {
      return 1;
    }
  } catch (err) {
    console.error('Error getting next userId:', err);
    throw err;
  }
}

router.post('/create', validateUserData, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await getNextUserId();
    const newUser = new User({
      userId,
      fullName,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Page not Found' });
  }
});

router.get('/getAll', async (req, res) => {
  try {
    const users = await User.find({}, 'fullName email role');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Page not Found' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email }, 'fullName email password role userId');
      if (user) {
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
              const token = jwt.sign({ user: user }, 'your_secret_key', { expiresIn: '1h' });
              res.json({ success: true, token });
          } else {
              res.status(401).json({ success: false, message: 'Invalid username or password' });
          }
      } else {
          res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
  } catch (error) {
      console.error(error);
      res.status(404).json({ success: false, message: 'Page not Found' });
  }
});

module.exports = router;





