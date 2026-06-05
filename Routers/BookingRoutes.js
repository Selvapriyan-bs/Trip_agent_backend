const express = require("express")
const router = express.Router();
const { details } = require("../Controllers/BookingController");

router.post("/add",details)

module.exports = router 