import nodemailer from "nodemailer";
import { envConfig } from "./config";

export const sendConfirmationEmail = async (to: string, name: string, positionName: string, resumeUrl: string) => {
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
    from: '"SISCOTEK Careers" <mdtanvir7462@gmail.com>',
    to,
    subject: "✅ Application Received | SISCOTEK",
    text: `Hello ${name}, thank you for applying for the position of ${positionName} at SISCOTEK.`,
    html: `
      <div style="max-width: 600px; margin: auto; background: linear-gradient(to bottom, #ffffff, #f8fafc); padding: 0; font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; color: #2d3748; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background-color: #f8fafc; padding: 30px 20px; text-align: center; border-bottom: 1px solid #e2e8f0;">
          <h1 style="color: #1a365d; margin: 0; font-size: 24px; font-weight: 600;">Application Confirmation</h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Dear <strong>${name}</strong>,
          </p>
          
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for applying for the position of <strong>${positionName}</strong> at <strong>SISCOTEK</strong>. We have successfully received your application.
          </p>

          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
            Our recruitment team will review your application, and if your qualifications meet our criteria, we will contact you for the next steps.
          </p>

          <!-- Resume Preview -->
          <div style="margin: 30px 0; text-align: center;">
            <a href="${resumeUrl}" target="_blank" style="background-color: #3182ce; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 15px; display: inline-block;">📄 View Your Resume</a>
            <p style="font-size: 13px; color: #4a5568; margin-top: 10px;">If the resume link is incorrect, please resubmit your application with the correct file.</p>
          </div>
          <!-- Tip Section -->
          <div style="background-color: #ebf8ff; padding: 16px; border-radius: 8px; border-left: 4px solid #3182ce; margin-bottom: 25px;">
            <p style="margin: 0; font-size: 14px; color: #2c5282;">
              📌 Tip: Make sure your email inbox is accessible and check your spam folder just in case you miss any follow-up emails from us.
            </p>
          </div>

          <hr style="border: none; height: 1px; background: linear-gradient(to right, rgba(226, 232, 240, 0), rgba(226, 232, 240, 1), rgba(226, 232, 240, 0)); margin: 30px 0;">

          <!-- Help Section -->
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="font-size: 15px; color: #1a365d; margin-top: 0;">Need help?</h3>
            <ul style="font-size: 14px; color: #4a5568; padding-left: 20px; margin: 0;">
              <li>Email us at <a href="mailto:careers@siscotek.com" style="color: #3182ce; text-decoration: none;">careers@siscotek.com</a></li>
              <li>Or call us directly at <strong>718.261.2000</strong></li>
            </ul>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} SISCOTEK. All rights reserved.</p>
          <p style="margin: 8px 0 0;">98-10 Ascan Avenue, Forest Hills, NY 11375</p>
        </div>
      </div>
    `,
  });
};
