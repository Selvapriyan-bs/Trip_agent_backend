const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendOtpEmail = async (email, otp) => {
    await transporter.sendMail({
        from: `"TripAgent" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Password Reset OTP - TripAgent",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 12px;">
                <h2 style="color: #0ea5e9; margin-bottom: 16px;">TripAgent</h2>
                <p style="color: #333; font-size: 15px;">Use the OTP below to reset your password. It expires in 10 minutes.</p>
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
                    <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #0369a1;">${otp}</span>
                </div>
                <p style="color: #666; font-size: 13px;">If you did not request this, please ignore this email.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="color: #999; font-size: 12px; text-align: center;">TripAgent — Your Travel Companion</p>
            </div>
        `,
    });
};

module.exports = { sendOtpEmail };