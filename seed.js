const mongoose = require("mongoose");
require("dotenv").config();

const booking = require("./Models/BookingModel");

const dummyData = [
  { firstName: "Alice", lastName: "Johnson", email: "alice@example.com", phone: "+1-555-0101", from: "New York, USA", destination: "Paris, France", departureDate: "2026-07-15", returnDate: "2026-07-22", guests: "2", paymentId: "pay_abc123", orderId: "ord_001", signature: "sig_abc123" },
  { firstName: "Bob", lastName: "Smith", email: "bob@example.com", phone: "+1-555-0102", from: "Los Angeles, USA", destination: "Bali, Indonesia", departureDate: "2026-08-10", returnDate: "2026-08-20", guests: "1", paymentId: "pay_def456", orderId: "ord_002", signature: "sig_def456" },
  { firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", phone: "+1-555-0103", from: "Chicago, USA", destination: "Kyoto, Japan", departureDate: "2026-09-05", returnDate: "2026-09-15", guests: "3", paymentId: "pay_ghi789", orderId: "ord_003", signature: "sig_ghi789" },
  { firstName: "Diana", lastName: "Prince", email: "diana@example.com", phone: "+1-555-0104", from: "Miami, USA", destination: "New York, USA", departureDate: "2026-06-20", returnDate: "2026-06-25", guests: "2", paymentId: "pay_jkl012", orderId: "ord_004", signature: "sig_jkl012" },
  { firstName: "Eve", lastName: "Davis", email: "eve@example.com", phone: "+1-555-0105", from: "San Francisco, USA", destination: "Tokyo, Japan", departureDate: "2026-10-01", returnDate: "2026-10-14", guests: "4", paymentId: "pay_mno345", orderId: "ord_005", signature: "sig_mno345" },
  { firstName: "Frank", lastName: "Miller", email: "frank@example.com", phone: "+1-555-0106", from: "Seattle, USA", destination: "Bali, Indonesia", departureDate: "2026-11-01", returnDate: "2026-11-10", guests: "2", paymentId: "pay_pqr678", orderId: "ord_006", signature: "sig_pqr678" },
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
