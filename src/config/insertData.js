// insertData.js
import connectDB from './db.js'; 
import mongoose from 'mongoose';
import User from '../models/User.js';  

const run = async () => {
  try {
    // DB 연결
    await connectDB();  

    // 기존 데이터 초기화
    await User.deleteMany({});

    const user = new User({
      name: '홍길동',
      age: 78,
      gender: 'M'
    });
    await user.save();
    console.log('✅ User inserted');

  } catch (err) {
    console.error('❌ Error inserting data:', err);
  } finally {
    mongoose.disconnect();
  }
};

run();
