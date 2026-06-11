const packagedata = require("../Models/PackageModel");

const createPackage = async (req, res) => {
    try {
        const { id_val, title, destination, region, country, price, days, rating, reviews, badge, description, image, itinerary } = req.body;

        if (!title || !price) {
            return res.status(400).json({
                success: false,
                message: "Title and Price are required fields."
            });
        }

        const newPackage = new packagedata({
            id_val, title, destination, region, country, price, days, rating, reviews,
            badge: badge || "New",
            description: description || "No description provided.",
            image: image || "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            itinerary: itinerary || [],
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

const getAllPackage = async (req, res) => {
    try {
        const packages = await packagedata.find({});
        res.status(200).json({
            message: "Data found",
            count: packages.length,
            data: packages,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Data finding issue",
            error: err.message,
        });
    }
};

const getPackageById = async (req, res) => {
    try {
        const pkg = await packagedata.findById(req.params.id);
        if (!pkg) {
            return res.status(404).json({ message: "Package not found" });
        }
        res.status(200).json({ message: "Package found", data: pkg });
    } catch (err) {
        res.status(500).json({ message: "Error fetching package", error: err.message });
    }
};

module.exports = {
    getAllPackage,
    getPackageById,
    createPackage,
}
