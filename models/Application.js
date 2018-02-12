const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const applicationSchema = new Schema({
  userRecord: UserSchema,
  expertise: [String],
  links: [String],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date
});

mongoose.model('application', applicationSchema);
