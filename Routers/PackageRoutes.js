const express = require("express");
const {getAllPackage,createPackage,getPackageById} = require("../Controllers/PackageController");
const router = express.Router();

router.get("/",getAllPackage);
router.get("/:id",getPackageById);
router.post("/post",createPackage);

module.exports = router;