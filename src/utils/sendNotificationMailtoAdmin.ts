import nodemailer from "nodemailer";
import { envConfig } from "./config";

export const sendNotificationToAdminEmail = async (name: string, positionName: string, resumeUrl: string) => {
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
    to: envConfig.recruiter_gmail,
    subject: `📩 New Job Application: ${positionName} | ${name}`,
    text: `New application received from ${name} for the position of ${positionName}. Resume: ${resumeUrl}\n\nVisit our website for more information: https://www.siscotek.com`,
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Job Application</title>
      <style type="text/css">
        /* Client-specific styles */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        
        /* Reset styles */
        body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
        
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
      <![endif]-->
      <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px;">
        <!-- Header -->
        <tr>
          <td align="center" bgcolor="#f8fafc" style="padding: 20px; border: 1px solid #e2e8f0; border-bottom: none;">
            <h1 style="font-size: 20px; color: #1a365d; margin: 0;">📥 New Application Received</h1>
          </td>
        </tr>
        
        <!-- Content -->
        <tr>
          <td bgcolor="#ffffff" style="padding: 30px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 15px 0; color: #2d3748; font-size: 15px; line-height: 1.6;">Hello Admin,</p>
            <p style="margin: 0 0 15px 0; color: #2d3748; font-size: 15px; line-height: 1.6;">A new candidate has applied for the position of <strong style="color: #1a365d;">${positionName}</strong>.</p>
            
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="30%" style="padding: 5px 0; vertical-align: top;"><strong style="color: #1a365d;">Applicant Name:</strong></td>
                <td style="padding: 5px 0; vertical-align: top;">${name}</td>
              </tr>
              <tr>
                <td width="30%" style="padding: 5px 0; vertical-align: top;"><strong style="color: #1a365d;">Position:</strong></td>
                <td style="padding: 5px 0; vertical-align: top;">${positionName}</td>
              </tr>
            </table>
            
            <!-- Button - Using nested tables for Outlook -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 25px 0;">
              <tr>
                <td align="center">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" bgcolor="#3182ce" style="border-radius: 4px;">
                        <a href="${resumeUrl}" target="_blank" style="font-size: 15px; color: #ffffff; text-decoration: none; padding: 12px 20px; display: inline-block; font-weight: bold;">📄 View Resume</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <p style="margin: 0 0 15px 0; color: #2d3748; font-size: 15px; line-height: 1.6;">Please review and take necessary action from your admin panel.</p>
            
            <!-- Website Info -->
            <p style="margin: 25px 0 0 0; color: #2d3748; font-size: 15px; line-height: 1.6; border-top: 1px solid #e2e8f0; padding-top: 15px;">
              For more information, please visit our website: <br/>
              <a href="https://www.siscotek.com" target="_blank" style="color: #3182ce; text-decoration: none; font-weight: bold;">www.siscotek.com</a>
            </p>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td bgcolor="#f8fafc" style="padding: 20px; border: 1px solid #e2e8f0; border-top: none; text-align: center; font-size: 12px; color: #718096;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} SISCOTEK. All rights reserved.</p>
            <p style="margin: 8px 0 0;">98-10 Ascan Avenue, Forest Hills, NY 11375</p>
          </td>
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
      </table>
      <![endif]-->
    </body>
    </html>
    `,
  });
};
