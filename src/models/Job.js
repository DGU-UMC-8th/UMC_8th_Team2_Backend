<<<<<<< HEAD
import mongoose from 'mongoose';
=======
// models/Job.js
const mongoose = require("mongoose");
>>>>>>> 3f40132 (jobs 로직 추가)

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  deadline: Date,
  manager: String,
  jobId: String,
  isLiked: Boolean,
});

<<<<<<< HEAD
const Job = mongoose.model('Job', jobSchema);
export default Job;
=======
module.exports = mongoose.model("Job", jobSchema);

db.job.insertMany([
  {
    jobtitle: "아파트 경비원 채용",
    deadline: "20241213",
    isliked: false,
    manager: "정보 없음",
    jobId: "KJKX002411290017",
  },
  {
    jobtitle: "[정자동] 분당파크뷰 아파트 외곽청소 미화원 모집",
    deadline: "20241213",
    isliked: false,
    manager: "정보 없음",
    jobId: "KJKM002411290011",
  },
  {
    jobtitle: "(장애인 병행 채용) 아파트 미화원 모집",
    deadline: "20241213",
    isliked: false,
    manager: "정보 없음",
    jobId: "K120032411290020",
  },
  {
    jobtitle: "[역북동]푸르지오 아파트 실내 미화원",
    deadline: "20250128",
    isliked: false,
    manager: "정보 없음",
    jobId: "KJKX002411290004",
  },
  {
    jobtitle: "이천 사동6차현대아파트 실내미화원 모집합니다",
    deadline: "20250105",
    isliked: false,
    manager: "정보 없음",
    jobId: "KF11372411290001",
  },
]);
>>>>>>> 3f40132 (jobs 로직 추가)
