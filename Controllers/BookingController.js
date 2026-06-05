const booking = require("../Models/BookingModel");

const details = async (req, res) => {
    try {
        const { 
            firstName,
            lastName,
            email,
            phone,
            from,
            destination,
            departureDate,
            returnDate,
            guests 
        } = req.body;

        const newDetails = new booking({
            firstName,
            lastName,
            email,
            phone,
            from,
            destination,
            departureDate,
            returnDate,
            guests
        });

        const SavedDestination = await newDetails.save();
        
        return res.status(202).json({
            message: "Details stored",
            data: SavedDestination,
        });
    }
    catch (err) {
        // Log the actual error to your terminal window so you can see it
        console.error("Database Save Error:", err); 

        // Use 500 for server/database validation errors
        return res.status(500).json({
            message: "Error in Details Saving",
            error: err.message, 
        });
    }
}

module.exports = {
    details,
};