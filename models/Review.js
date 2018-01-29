const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const reviewSchema = new Schema({
  reviewFrom: UserSchema,
  reviewOf: UserSchema,
  review: String
});

mongoose.model('reviews', reviewSchema);
