const Job = require("../models/Job");

const findJobsWithCursor = async ({ isliked, limit, cursor }) => {
  const filter = { isliked };
  if (cursor) {
    filter._id = { $gt: cursor };
  }

  const jobs = await Job.find(filter)
    .sort({ _id: 1 })
    .limit(limit + 1);

  let nextCursor = null;
  if (jobs.length > limit) {
    nextCursor = jobs[limit]._id;
    jobs.pop();
  }

  return { jobs, nextCursor };
};

const updateIsLikedByJobId = async (jobId, isLiked) => {
  const result = await Job.findOneAndUpdate(
    { jobId },
    { isLiked },
    { new: true }
  );

  return result;
};

module.exports = {
  findJobsWithCursor,
  updateIsLikedByJobId,
};
