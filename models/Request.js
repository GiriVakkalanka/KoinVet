const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const requestSchema = new Schema({
  expert: [UserSchema],
  client: [UserSchema],
  vertical: Number,
  accepted: { type: Boolean, default: false },
  dateSent: Date,
  dateAccepted: Date
});

mongoose.model('request', requestSchema);
