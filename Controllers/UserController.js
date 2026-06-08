const User = require("../Models/UserModel");

const signupUser = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        const NewUser = new User({
            fullName,
            email,
            password, 
            role: role || "user", 
        });

        const SavedUser = await NewUser.save();
        res.status(200).json({
            message: "User Registered successfully",
            data: SavedUser,
        });
    }
    catch (error) {
        res.status(500).json({ 
            message: "Error Registering user",
            error: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        //credentials Find user by 
        const userDetails = await User.findOne({ email: email, password: password });
        if (!userDetails) {
            return res.status(401).json({ // 401 Unauthorized is standard for invalid credentials
                message: "Invalid email or password",
            });
        }

        // 3. Customize success responses depending on user privilege tier
        if (userDetails.role === "admin") {
            return res.status(200).json({
                message: "Admin authenticated successfully",
                isAdmin: true,
                data: userDetails,
            });
        }

        return res.status(200).json({
            message: "User logged in successfully",
            isAdmin: false,
            data: userDetails,
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Error in log in processing",
            error: err.message
        });
    }
};

module.exports = {
    signupUser,
    loginUser,
};