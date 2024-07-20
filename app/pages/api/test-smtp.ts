import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Ensure the environment variables are set
    const smtpHost = process.env.SMTP_HOST as string;
    const smtpPort = parseInt(process.env.SMTP_PORT as string, 10);
    const smtpUser = process.env.SMTP_USER as string;
    const smtpPass = process.env.SMTP_PASS as string;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return res.status(400).json({ error: 'SMTP configuration is missing' });
    }

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify the connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.error('Nodemailer Verification Error:', error);
        return res
          .status(500)
          .json({ error: 'SMTP verification failed', details: error.message });
      } else {
        console.log('Server is ready to take our messages');
        return res
          .status(200)
          .json({ message: 'SMTP credentials are correct' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
