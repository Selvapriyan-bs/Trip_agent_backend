const express = require("express")
const router = express.Router();
const { details, getAllBookings, updateBookingStatus } = require("../Controllers/BookingController");

router.get("/", getAllBookings);
router.post("/add", details);
router.put("/:id", updateBookingStatus);

module.exports = router 