const mongoose = require('mongoose');
const { Schema } = mongoose;

const linkSchema = new Schema({
  description: String,
  url: String
});

mongoose.model('links', linkSchema);
