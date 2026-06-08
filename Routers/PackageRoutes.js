const express = require("express");
const {getAllPackage,createPackage} = require("../Controllers/PackageController");
const router = express.Router();

router.get("/",getAllPackage);
router.post("/post",createPackage);
// router.get("/:id",getPackageById);

module.exports = router;