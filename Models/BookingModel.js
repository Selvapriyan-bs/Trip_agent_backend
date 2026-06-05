const mongoose =require("mongoose")
const {email} =require("../Controllers/UserController")
const BookingSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    from:String,
    destination:String,
    departureDate:String,
    returnDate:String,
    guests:String    
});

module.exports = mongoose.model("BookingDetails",BookingSchema);