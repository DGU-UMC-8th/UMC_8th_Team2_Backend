import User from '../models/User.js';
import Job from '../models/Job.js';
import Document from '../models/Documents.js';

class UserRepository {
  async getSingleUser() {
    return await User.findOne(); // 유저는 1명이라고 가정
  }
}

export default new UserRepository();