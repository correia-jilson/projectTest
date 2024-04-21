
const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.post('/login', userControllers.login);

router.get('/protected', userControllers.verifyToken, (req, res) => {
    res.status(200).json({ message: 'Route protection accessed successfully' });
});

module.exports = router;


