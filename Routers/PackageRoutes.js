const express = require("express");
const {getAllPackage,getPackageById} = require("../Controllers/PackageController");
const router = express.Router();

router.get("/",getAllPackage);
// router.get("/:id",getPackageById);

module.exports = router;