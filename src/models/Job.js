import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  deadline: Date,
  manager: String,
  jobId: String,
  isLiked: Boolean
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
