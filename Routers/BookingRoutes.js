const express = require("express")
const router = express.Router();
const { details, getAllBookings } = require("../Controllers/BookingController");

router.get("/", getAllBookings);
router.post("/add", details)

module.exports = router 