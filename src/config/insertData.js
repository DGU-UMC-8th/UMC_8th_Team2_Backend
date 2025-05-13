// insertData.js
import mongoose from "mongoose";
import connectDB from "./db.js";
import User from "../models/User.js";
import Job from "../models/Job.js";

// 날짜 문자열 (YYYYMMDD) → Date 객체 변환 함수
const parseDate = (str) => {
  const year = str.slice(0, 4);
  const month = str.slice(4, 6);
  const day = str.slice(6, 8);
  return new Date(`${year}-${month}-${day}`);
};

const run = async () => {
  try {
    await connectDB(); // MongoDB 연결

    // ✅ User 데이터 초기화 및 삽입
    await User.deleteMany({});
    const user = new User({
      name: "홍길동",
      age: 78,
      gender: "M",
    });
    await user.save();
    console.log("✅ User inserted");

    // ✅ Job 데이터 삽입
    await Job.deleteMany({});
    const jobs = [
      {
        jobTitle: "아파트 경비원 채용",
        deadline: parseDate("20241213"),
        isLiked: false,
        manager: "정보 없음",
        jobId: "KJKX002411290017",
      },
      {
        jobTitle: "[정자동] 분당파크뷰 아파트 외곽청소 미화원 모집",
        deadline: parseDate("20241213"),
        isLiked: false,
        manager: "정보 없음",
        jobId: "KJKM002411290011",
      },
      {
        jobTitle: "(장애인 병행 채용) 아파트 미화원 모집",
        deadline: parseDate("20241213"),
        isLiked: false,
        manager: "정보 없음",
        jobId: "K120032411290020",
      },
      {
        jobTitle: "[역북동]푸르지오 아파트 실내 미화원",
        deadline: parseDate("20250128"),
        isLiked: false,
        manager: "정보 없음",
        jobId: "KJKX002411290004",
      },
      {
        jobTitle: "이천 사동6차현대아파트 실내미화원 모집합니다",
        deadline: parseDate("20250105"),
        isLiked: false,
        manager: "정보 없음",
        jobId: "KF11372411290001",
      },
    ];

    await Job.insertMany(jobs);
    console.log("✅ Jobs inserted");
  } catch (err) {
    console.error("❌ Error inserting data:", err);
  } finally {
    mongoose.disconnect();
  }
};

run();
