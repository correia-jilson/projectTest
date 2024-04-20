const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  }
});


planSchema.pre('save', async function(next) {
    try {
      if (!this._id) {
        const highestJob = await mongoose.model('Plan').findOne({}, {}, { sort: { '_id': -1 } });
        this._id = highestJob ? highestJob._id + 1 : 1;
      }
      next();
    } catch (err) {
      console.error('Error generating job ID:', err);
      next(err);
    }
});
  

const Plan = mongoose.model('plan', planSchema);

module.exports = Plan;


