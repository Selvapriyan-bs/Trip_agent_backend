const mongoose = require("mongoose");
require("dotenv").config();

const booking = require("./Models/BookingModel");

const dummyData = [
  { firstName: "Grace", lastName: "Lee", email: "grace@example.com", phone: "+1-555-0201", from: "Boston, USA", destination: "London, UK", departureDate: "2026-12-01", returnDate: "2026-12-08", guests: "2", paymentId: "pay_grace01", orderId: "ord_grace01", signature: "sig_grace01" },
  { firstName: "Henry", lastName: "Wang", email: "henry@example.com", phone: "+1-555-0202", from: "Houston, USA", destination: "Dubai, UAE", departureDate: "2026-11-15", returnDate: "2026-11-22", guests: "3", paymentId: "pay_henry01", orderId: "ord_henry01", signature: "sig_henry01" },
  { firstName: "Ivy", lastName: "Chen", email: "ivy@example.com", phone: "+1-555-0203", from: "Denver, USA", destination: "Sydney, Australia", departureDate: "2027-01-10", returnDate: "2027-01-25", guests: "2", paymentId: "pay_ivy01", orderId: "ord_ivy01", signature: "sig_ivy01" },
  { firstName: "Jack", lastName: "Wilson", email: "jack@example.com", phone: "+1-555-0204", from: "Phoenix, USA", destination: "Rome, Italy", departureDate: "2026-10-05", returnDate: "2026-10-12", guests: "4", paymentId: "pay_jack01", orderId: "ord_jack01", signature: "sig_jack01" },
  { firstName: "Kate", lastName: "Taylor", email: "kate@example.com", phone: "+1-555-0205", from: "Portland, USA", destination: "Barcelona, Spain", departureDate: "2026-09-20", returnDate: "2026-09-28", guests: "1", paymentId: "pay_kate01", orderId: "ord_kate01", signature: "sig_kate01" },
];

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB");
    await booking.insertMany(dummyData);
    console.log("Dummy data inserted successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
