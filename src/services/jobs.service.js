import { createJobListResponseDTO } from "../dto/jobs.dto.js";
import { updateIsLikedByJobId } from "../repositories/jobs.repository.js";

const getJobs = async ({ isliked, limit, cursor }) => {
  const { jobs, nextCursor } = await jobRepository.findJobsWithCursor({
    isliked,
    limit,
    cursor,
  });
  return createJobListResponseDTO(jobs, nextCursor);
};

const updateJobLike = async ({ jobId, isLiked }) => {
  const updated = await updateIsLikedByJobId(jobId, isLiked);
  if (!updated) {
    throw new Error("Job not found");
  }
  return updated;
};

module.exports = {
  getJobs,
  updateJobLike,
};
