// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  deadline: Date,
  manager: String,
  jobId: String,
  isLiked: Boolean
});

module.exports = mongoose.model('Job', jobSchema);
