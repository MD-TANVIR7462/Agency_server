import nodemailer from "nodemailer";
import { envConfig } from "./config";

export const sendEmail = async (to: string, username: string, resetUILink: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "mdtanvir7462@gmail.com",
      pass: envConfig.gmailAuthPass,
    },
  });

  await transporter.sendMail({
    from: '"SISCOTEK Support" <mdtanvir7462@gmail.com>',
    to,
    subject: "🔐 Password Reset Request | SISCOTEK",
    text: `Hello ${username}, please click the link in the email to reset your password.`,
    html: `
      <div style="max-width: 600px; margin: auto; background: linear-gradient(to bottom, #ffffff, #f8fafc); padding: 0; font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; color: #2d3748; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background-color: #f8fafc; padding: 30px 20px; text-align: center; border-bottom: 1px solid #e2e8f0;">
          <h1 style="color: #1a365d; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">Reset Your Password</h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #2d3748;">Hello <strong style="color: #2b6cb0;">${username}</strong>,</p>
          
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 25px; color: #4a5568;">
            We received a request to reset your SISCOTEK account password. Click the button below 
            to securely create a new password:
          </p>

          <!-- Main CTA Button -->
          <div style="text-align: center; margin: 35px 0;">
            <a href="${resetUILink}" 
               style="background: #3182ce; color: white; padding: 16px 32px; 
                      border-radius: 8px; text-decoration: none; font-size: 16px; 
                      font-weight: 600; display: inline-block; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                      transition: all 0.3s ease;">
              Reset My Password
            </a>
          </div>

          <!-- Security Alert -->
          <div style="background-color: #ebf8ff; padding: 16px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #3182ce;">
            <div style="display: flex; align-items: flex-start;">
              <div style="margin-right: 12px; color: #3182ce; font-size: 20px;">⚠️</div>
              <div>
                <p style="font-size: 14px; color: #2c5282; margin: 0; font-weight: 500;">
                  <strong>Security notice:</strong> This link expires in 10 minutes. 
                  If you didn't request this, please secure your account immediately.
                </p>
              </div>
            </div>
          </div>

          <hr style="border: none; height: 1px; background: linear-gradient(to right, rgba(226, 232, 240, 0), rgba(226, 232, 240, 1), rgba(226, 232, 240, 0)); margin: 30px 0;">
          
          <!-- Help Section -->
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="font-size: 15px; color: #1a365d; margin-top: 0; margin-bottom: 15px;">Need help?</h3>
            <ul style="font-size: 14px; color: #4a5568; padding-left: 20px; margin: 0;">
              <li style="margin-bottom: 8px;">If the button doesn't work, try copying this email to your primary inbox</li>
              <li style="margin-bottom: 8px;">Mark as "Not spam" if you found this in spam folder</li>
              <li>Contact <a href="mailto:support@siscotek.com" style="color: #3182ce; text-decoration: none; font-weight: 500;">support@siscotek.com</a> 
              or call 718.261.2000</li>
            </ul>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} SISCOTEK. All rights reserved.</p>
          <p style="margin: 8px 0 0 0;">98-10 Ascan Avenue, Forest Hills, NY 11375</p>
        </div>
      </div>
    `,
  });
};
