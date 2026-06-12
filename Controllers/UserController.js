const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const { sendOtpEmail } = require("../Utils/emailService");

const signupUser = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const NewUser = new User({
            fullName,
            email,
            password: hashedPassword,
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

        const userDetails = await User.findOne({ email });
        if (!userDetails) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, userDetails.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

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

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "No account found with this email" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = otp;
        user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
        await user.save();

        await sendOtpEmail(email, otp);

        res.status(200).json({ message: "OTP sent to your email" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error sending OTP",
            error: error.message,
        });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        if (!email || !otp || !newPassword) {
            return res.status(400).json({ message: "Email, OTP, and new password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "No account found with this email" });
        }

        if (!user.otp || !user.otpExpiry) {
            return res.status(400).json({ message: "No OTP requested. Please request a new one." });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        if (new Date() > user.otpExpiry) {
            return res.status(400).json({ message: "OTP has expired. Please request a new one." });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        res.status(200).json({ message: "Password reset successfully" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error resetting password",
            error: error.message,
        });
    }
};

module.exports = {
    signupUser,
    loginUser,
    forgotPassword,
    resetPassword,
};