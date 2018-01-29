const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const ratingSchema = new Schema({
  ratingFrom: UserSchema,
  ratingOf: UserSchema,
  rating: Number
});

mongoose.model('ratings', ratingSchema);
