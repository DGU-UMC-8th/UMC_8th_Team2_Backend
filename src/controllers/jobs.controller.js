import jobService from "../services/jobs.service.js";
import { createJobQueryDTO, createLikeUpdateDTO } from "../dto/jobs.dto.js";
import { updateIsLikedByJobId } from "../repositories/jobs.repository.js";
import { createJobListResponseDTO } from "../dto/jobs.dto.js";

export const getJobs = async (req, res) => {
  try {
    const queryDTO = createJobQueryDTO(req.query);
    const responseDTO = await jobService.getJobs(queryDTO);
    res.json(responseDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류" });
  }
};

export const patchJobLike = async (req, res) => {
  try {
    const dto = createLikeUpdateDTO(req.params, req.body);
    const updated = await updateJobLike(dto);
    res.json({ message: "👍 즐겨찾기 상태가 변경되었습니다.", job: updated });
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: "❌ 해당 job을 찾을 수 없습니다." });
  }
};

module.exports = {
  getJobs,
  patchJobLike,
};
