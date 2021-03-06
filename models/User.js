const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  email: String,
  name: String
});

mongoose.model('User', UserSchema);
