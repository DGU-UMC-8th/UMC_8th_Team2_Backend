<<<<<<< HEAD
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db.js';
import { getUserProfile } from './controllers/user.controller.js';
import { generateMotivationController } from './controllers/motivationController.js';

=======
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/db.js";
import { getUserProfile } from "./controllers/user.controller.js";
import { getJobs } from "./controllers/jobs.controller.js";
>>>>>>> 3f40132 (jobs 로직 추가)

dotenv.config();
await connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
app.get('/api/v1/user/profile', getUserProfile);
app.post('/api/v1/user/motivation', generateMotivationController);
=======
app.get("/api/v1/user/profile", getUserProfile);
app.get("/api/v1/jobs", getJobs);
app.patch("/api/v1/jobs/:jobId/like", (req, res) => {
  const { jobId } = req.params;
  const { isLiked } = req.body;
  // 여기에 좋아요 상태 업데이트 로직을 추가하세요
  res.json({ message: `Job ${jobId} like status updated to ${isLiked}` });
});
>>>>>>> 3f40132 (jobs 로직 추가)

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
<<<<<<< HEAD

=======
>>>>>>> 3f40132 (jobs 로직 추가)
