const mongoose = require('mongoose');
//const Schema = mongoose.Schema
const { Schema } = mongoose;
const LinkSchema = require('./Link');
const RatingSchema = require('./Rating');
const ReviewSchema = require('./Review');
const SessionSchema = require('./Session');
const RequestSchema = require('./Request');

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  twitterId: String,
  linkedinId: String,
  name: String,
  pic: String,
  email: String,
  type: { type: Number, default: 0 },
  city: String,
  country: String,
  price: { type: Number, default: 0 },
  links: [LinkSchema],
  verticals: [Number],
  ratingsReceived: [RatingSchema],
  reviewsReceived: [ReviewSchema],
  ratingsSubmitted: [RatingSchema],
  reviewsSubmitted: [ReviewSchema],
  clients: [String],
  experts: [String],
  sessions: [SessionSchema],
  requestsReceived: [RequestSchema],
  requestsSubmitted: [RequestSchema],
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
