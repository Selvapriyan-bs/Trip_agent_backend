const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    from: String,
    destination: String,
    departureDate: String,
    returnDate: String,
    guests: String,
    paymentId: String,
    orderId: String,
    signature: String,
});

module.exports = mongoose.model("BookingDetails",BookingSchema);