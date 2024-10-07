import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as formidable from 'formidable';
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: 'Error parsing form data' });
      }

      const { title, name, email, phone, message } = fields;

      if (!email || !name) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
        return res
          .status(500)
          .json({ error: 'SMTP configuration is incomplete' });
      }

      let transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort, 10),
        secure: false,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptionsToApplicant = {
        from: `"Casco Group" <${smtpUser}>`,
        to: email,
        subject: 'Thank you for your job application',
        html: `
          <div style="text-align: center;">
            <img src="https://www.casco.com.eg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.60cc985c.png&w=256&q=75" alt="logo" />
            <p>Dear ${name},</p>
            <p>Thank you for applying for a job with us. We have received your application and our team will review it shortly.</p>
            <p>Best regards,<br/>Casco Group</p>
          </div>
        `,
      };

      const mailOptionsToAdmin = {
        from: `"Casco Group" <${smtpUser}>`,
        to: 'ahmedashrafhemdan74@gmail.com',
        subject: `New job application from ${name}`,
        html: `
          <div>
            <p>New job application received:</p>
            <p>Title: ${title}</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptionsToApplicant);
        await transporter.sendMail(mailOptionsToAdmin);
        res.status(200).json({ message: 'Emails sent successfully' });
      } catch (error: any) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({
          error: 'Error sending emails',
          details: error.message,
        });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
