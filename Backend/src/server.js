const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require("path");
const userRoutes = require(path.join(__dirname,'routes','userRoutes'));
const planRoutes = require(path.join(__dirname,'routes','planRoutes'));
const cors = require('cors');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => console.error(err));

app.use('/user', userRoutes);
app.use('/plan',planRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


