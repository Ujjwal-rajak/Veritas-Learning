import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

let transporter;

try {
  transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
} catch (error) {
  console.error("Failed to initialize mail transporter:", error.message);
}

const sendMail = async (to, otp) => {
  if (!transporter) {
    console.warn("Mail transporter not configured. Skipping email send.");
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject: "Reset Your Password",
      html: `<p>Your OTP for Password Reset is <b>${otp}</b>.
      It expires in 5 minutes.</p>`,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email:", error.message);
    throw new Error(error.message);
  }
};

export default sendMail;
