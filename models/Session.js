const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const sessionSchema = new Schema({
  expert: [UserSchema],
  client: [UserSchema],
  vertical: Number,
  price: Number,
  active: { type: Boolean, default: true },
  dateStarted: Date,
  dateEnded: Date
});

mongoose.model('sessions', sessionSchema);
