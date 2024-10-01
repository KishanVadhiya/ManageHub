const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // Unique username for each user
  email: { type: String, required: true, unique: true },  // Unique email for each user
  password: { type: String },  // Hashed password
});

module.exports = mongoose.model('User', UserSchema);