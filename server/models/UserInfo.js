// models/UserInfo.js

const mongoose = require('mongoose');

// Define the UserInfo schema
const UserInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Unique email for each user
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create and export the UserInfo model
const UserInfo = mongoose.model('UserInfo', UserInfoSchema);
module.exports = UserInfo;
