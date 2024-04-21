
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const companyRoutes = require('./src/routes/companyRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/userdata_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const jobPortalDB = mongoose.connection;

jobPortalDB.on('connected', () => {
  console.log('Connected to Job Portal Database...');
});

app.use(cors());
app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api', companyRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

module.exports = app;


