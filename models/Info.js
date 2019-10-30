const mongoose = require('mongoose');
const { Schema } = mongoose;

const InfoSchema = new Schema({
  school: { type: String, required: true },
  major: { type: String, required: true },
  gpa: { type: Number, required: true },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Info', InfoSchema);
