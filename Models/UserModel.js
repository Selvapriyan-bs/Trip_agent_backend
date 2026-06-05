const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
});

module.exports = mongoose.model("User", UserSchema);