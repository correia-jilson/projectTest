const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Body Parser middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// User model
const User = mongoose.model('User', userSchema);

// Email transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'ljc20000823@gmail.com',
        pass: 'Lyfgyh99@123456!' 
    }
});

// Register route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();

        // Send email
        const mailOptions = {
            from: 'ljc20000823@gmail.com',
            to: email,
            subject: 'Registration Successful',
            text: `Hi ${username}, welcome to our service! You have been successfully registered.`
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                res.send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Registered and email sent');
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering user');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
