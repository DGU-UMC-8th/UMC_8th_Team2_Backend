// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
});

const User = mongoose.model('User', userSchema);

// default export 사용
export default User;
