const createJobResponseDTO = (job) => ({
  jobtitle: job.jobtitle,
  deadline: job.deadline,
  isliked: job.isliked,
  manager: job.manager,
  jobId: job.jobId,
});

const createJobListResponseDTO = (jobs, nextCursor) => ({
  jobs: jobs.map(createJobResponseDTO),
  nextCursor,
});
const createLikeUpdateDTO = (params, body) => ({
  jobId: params.id,
  isLiked: Boolean(body.isLiked),
});
module.exports = {
  createJobListResponseDTO,
  createLikeUpdateDTO,
};
