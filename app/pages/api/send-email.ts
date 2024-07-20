import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { course, formData } = req.body;

    if (!course || !formData || !formData.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Ensure the environment variables are set
    const smtpHost = process.env.SMTP_HOST as string;
    const smtpPort = parseInt(process.env.SMTP_PORT as string, 10);
    const smtpUser = process.env.SMTP_USER as string;
    const smtpPass = 'rjvriltuhtcbvsnk'; // Use the app password here

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
        pass: smtpPass, // Use the app password here
      },
    });

    // Define the email options
    const mailOptionsToUser = {
      from: `"Casco Group" <${smtpUser}>`,
      to: formData.email,
      subject: `Thank you for your interest in ${course.c_title}`,
      html: `<h1 style="color:red">Thank you for your interest in ${course.name}. We will call you as soon as possible.</h1>`,
    };

    const mailOptionsToAdmin = {
      from: `"Casco Group" <${smtpUser}>`,
      to: 'mohamed@cascotec.com',
      subject: `New submission for ${course.name}`,
      html: `<div id=":nb" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd"><div id=":mj" class="a3s aiL msg-818784179456676395"><u></u>


    
    
    
    
    
<div>
    <div class="m_-818784179456676395main-container">
        <div class="m_-818784179456676395header">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NZUxwncfrOD2wFHeoixjMCBsAJeWij55QCufAbS4trCCBblIJtYoVhVbqhVmXwLcRmCtjHh0d_31DUwtk-w-bcADu5esSsOx68asw=s0-d-e1-ft#https://api.gac.org.sa/public/images/email/header.png" alt="logo" class="CToWUd" data-bit="iit">
</div>        <div class="m_-818784179456676395content">
            <div class="m_-818784179456676395main-img">
                <img src="https://ci3.googleusercontent.com/meips/ADKq_Nbk1fsPvIg6lFu920e92tt2I0nD9LmG19l9cg3XHecZe_WMjicporVYn-oKR7MU7tiVUdjo8KE5tKYg0hQGMGZJ0W2nWfs=s0-d-e1-ft#https://api.gac.org.sa/public/images/email/1.jpg" alt="img" class="CToWUd a6T" data-bit="iit" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 789.987px; top: 282.1px;"><span data-is-tooltip-wrapper="true" class="a5q" jsaction="JIbuQc:.CLIENT"><button class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE" jscontroller="PIVayb" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;" data-idom-class="CgzRE" jsname="hRZeKc" aria-label="Download attachment " data-tooltip-enabled="true" data-tooltip-id="tt-c55" data-tooltip-classes="AZPksf" id="" jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 43:WyJpbWFnZS9qcGVnIl0."><span class="OiePBf-zPjgPe VYBDae-JX-UHGRz"></span><span class="bHC-Q" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="VYBDae-JX-ank-Rtc0Jf" jsname="S5tZuc" aria-hidden="true"><span class="bzc-ank" aria-hidden="true"><svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" class=" aoH"><path d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z"></path></svg></span></span><div class="VYBDae-JX-ano"></div></button><div class="ne2Ple-oshW8e-J9" id="tt-c55" role="tooltip" aria-hidden="true">Download</div></span></div>
            </div>
            <div>
                <p>Dear Ahmed   Hemdan ,</p>
<p>Your request had approved to join the training for An internal auditor ISO19011:2018 for the requirements for the accreditation of inspection bodies in accordance with the international standard ISO / IEC 17020:2012</p>
<p>Kindly find the invoice issued as attached.</p>
 <br>
 <br>
<p style="text-align:right;direction:rtl">${course.c_title_ar}</p>
<p style="text-align:right;direction:rtl">تم إصدار الفاتورة كما هو مرفق.</p><p><a class="m_-818784179456676395btn" href="https://system.gac.org.sa//admin/Training/AllTraining/TrainingDetails/WjiI7sdNMjZSuE8vaXUeZArYYoad0V5GL2OLyGQX" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://system.gac.org.sa//admin/Training/AllTraining/TrainingDetails/WjiI7sdNMjZSuE8vaXUeZArYYoad0V5GL2OLyGQX&amp;source=gmail&amp;ust=1721593286001000&amp;usg=AOvVaw27Gg4ineKAEAsnlQdzCx_F">Click here</a></p><br><p class="m_-818784179456676395hint">Many greetings<br> - The GAC team</p><br>
            </div>
        </div>
    </div>
</div>


<br>
<font face="Times New Roman" size="1"><div style="text-align:left"><font color="#808080" style="text-align:justify"><b>Disclaimer:</b> The information in this email may contain </font><font color="#ff0000" style="text-align:justify">confidential </font><font color="#808080" style="text-align:justify">information and it is intended solely for the addresses. It is&nbsp;</font><span style="text-align:justify;color:rgb(128,128,128)">unauthorized for anyone else to access this email. You shall delete the email and destroy any copies if it is not intended for you. Any disclosure, copying, distribution is prohibited and may be considered unlawful. Statements and opinions expressed in this email are those of the sender, and do not necessarily reflect those of GCC Accreditation Center (GAC).</span><br></div></font></div><div class="yj6qo"></div><div class="yj6qo"></div></div>`,
    };

    try {
      await transporter.sendMail(mailOptionsToUser);
      await transporter.sendMail(mailOptionsToAdmin);
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error: any) {
      console.error('Nodemailer Error:', error);
      res.status(500).json({
        error: 'Error sending emails',
        details: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
