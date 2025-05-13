import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  content: String
});

const Document = mongoose.model('Document', documentSchema);
export default Document;
