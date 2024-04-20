const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId:{
    type: Number,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});

userSchema.pre('save', async function(next) {
  try {
    if (!this.userId) {
      const highestUser = await mongoose.model('User').findOne({}, {}, { sort: { 'userId': -1 } });
      this.userId = highestUser ? highestUser.userId + 1 : 1;
    }
    next();
  } catch (err) {
    console.error('Error generating userId:', err);
    next(err);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User



