const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    role: String,
    otp: String,
    otpExpiry: Date,
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);