const packagedata = require("../Models/PackageModel");


const createPackage = async (req, res) => {
    try {
        const { title, country, badge, price, description, image } = req.body;

    
        if (!title || !price) {
            return res.status(400).json({
                success: false,
                message: "Title and Price are required fields."
            });
        }

        const newPackage = new packagedata({
            title,
            country: country || "Global",
            badge: badge || "New",
            price,
            description: description || "No description provided.",
            image: image || "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" 
        });

        const savedPackage = await newPackage.save();

        res.status(201).json({
            success: true,
            message: "Destination package added successfully!",
            data: savedPackage
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error adding destination package",
            error: err.message
        });
    }
};

// Fetch all packages
const getAllPackage = async (req, res) => {
    try {
        const package = await packagedata.find({});
        
        res.status(201).json({
            message:"Data found",
            count: package.length,
            data:package
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Data finding issue",
            error: err.message,
        });
    }
};

module.exports = {
getAllPackage,
// getPackageById,
createPackage
}