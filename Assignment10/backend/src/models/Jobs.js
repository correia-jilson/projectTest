const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
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


jobSchema.pre('save', async function(next) {
    try {
      if (!this._id) {
        const highestJob = await mongoose.model('Job').findOne({}, {}, { sort: { '_id': -1 } });
        this._id = highestJob ? highestJob._id + 1 : 1;
      }
      next();
    } catch (err) {
      console.error('Error generating job ID:', err);
      next(err);
    }
});
  

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;


