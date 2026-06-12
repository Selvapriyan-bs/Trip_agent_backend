const express = require("express");
const {getAllPackage,createPackage,getPackageById,deletePackage,updatePackage} = require("../Controllers/PackageController");
const router = express.Router();

router.get("/",getAllPackage);
router.get("/:id",getPackageById);
router.post("/post",createPackage);
router.delete("/:id",deletePackage);
router.put("/:id",updatePackage);

module.exports = router;