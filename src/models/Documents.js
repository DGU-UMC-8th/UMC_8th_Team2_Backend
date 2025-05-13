const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  content: String
});

module.exports = mongoose.model('Document', documentSchema);
