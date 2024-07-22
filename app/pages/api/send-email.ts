// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { course, formData } = req.body;

//     if (!course || !formData || !formData.email) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     let transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: parseInt(process.env.SMTP_PORT, 10),
//       secure: false, // use true for port 465
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const mailOptionsToUser = {
//       from: `"Casco Group" <${process.env.SMTP_USER}>`,
//       to: formData.email,
//       subject: `Thank you for your interest in ${course.c_title}`,
//       html: `<div id=":nb" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd">
//     <div id=":mj" class="a3s aiL msg-818784179456676395" style="display: flex; align-items: center; justify-content: center; min-height: 100vh;">
//         <div style="text-align: center;">
//             <div class="m_-818784179456676395main-container">
//                 <div class="m_-818784179456676395header" style="text-align: center;">
//                     <img src="https://www.casco.com.eg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.60cc985c.png&w=256&q=75" alt="logo" class="CToWUd" data-bit="iit">
//                 </div>
//                 <div class="m_-818784179456676395content" style="text-align: center;">
//                     <div class="m_-818784179456676395main-img" style="display: flex; align-items: center; justify-content: center;">
//                         <img src="${course.imageUrl}" alt="img" class="CToWUd a6T" data-bit="iit" tabindex="0">
//                         <div class="a6S" dir="ltr" style="opacity: 0.01;top: 282.1px;">
//                             <span data-is-tooltip-wrapper="true" class="a5q" jsaction="JIbuQc:.CLIENT">
//                                 <button class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE" jscontroller="PIVayb" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;" data-idom-class="CgzRE" jsname="hRZeKc" aria-label="Download attachment " data-tooltip-enabled="true" data-tooltip-id="tt-c55" data-tooltip-classes="AZPksf" id="" jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 43:WyJpbWFnZS9qcGVnIl0.">
//                                     <span class="OiePBf-zPjgPe VYBDae-JX-UHGRz"></span>
//                                     <span class="bHC-Q" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span>
//                                     <span class="VYBDae-JX-ank-Rtc0Jf" jsname="S5tZuc" aria-hidden="true">
//                                         <span class="bzc-ank" aria-hidden="true"><svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" class=" aoH">
//                                             <path d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z">
//                                             </path>
//                                         </svg>
//                                         </span>
//                                     </span>
//                                     <div class="VYBDae-JX-ano"></div>
//                                 </button>
//                                 <div class="ne2Ple-oshW8e-J9" id="tt-c55" role="tooltip" aria-hidden="true">Download
//                                 </div>
//                             </span>
//                         </div>
//                     </div>
//                     <div>
//                         <p>Dear Ahmed Hemdan,</p>
//                         <p>Your request had approved to join the training for ${course.c_title}</p>
//                         <br><br>
//                         <p style="text-align:right;direction:rtl"> تم قبولكم في الدورة  ${course.c_title}</p>
//                         <p style="text-align:right;direction:rtl">سيتواصل معكم احد ممثلينا في اقرب وقت ممكن  </p>
//                         <p style="text-align:right;direction:rtl">شكرا لاختيارك كاكسو</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// `,
//     };

//     const mailOptionsToAdmin = {
//       from: `"Casco Group" <${smtpUser}>`,
//       to: 'mohamed@cascotec.com',
//       subject: `New submission for ${course.c_title}`,
//       html: `<div id=":nb" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd">
//     <div id=":mj" class="a3s aiL msg-818784179456676395" style="display: flex; align-items: center; justify-content: center; min-height: 100vh;">
//         <div style="text-align: center;">
//             <div class="m_-818784179456676395main-container">
//                 <div class="m_-818784179456676395header" style="text-align: center;">
//                     <img src="https://www.casco.com.eg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.60cc985c.png&w=256&q=75" alt="logo" class="CToWUd" data-bit="iit">
//                 </div>
//                 <div class="m_-818784179456676395content" style="text-align: center;">
//                     <div class="m_-818784179456676395main-img" style="display: flex; align-items: center; justify-content: center;">
//                         <img src="${course.imageUrl}" alt="img" class="CToWUd a6T" data-bit="iit" tabindex="0">
//                         <div class="a6S" dir="ltr" style="opacity: 0.01;top: 282.1px;">
//                             <span data-is-tooltip-wrapper="true" class="a5q" jsaction="JIbuQc:.CLIENT">
//                                 <button class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE" jscontroller="PIVayb" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;" data-idom-class="CgzRE" jsname="hRZeKc" aria-label="Download attachment " data-tooltip-enabled="true" data-tooltip-id="tt-c55" data-tooltip-classes="AZPksf" id="" jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 43:WyJpbWFnZS9qcGVnIl0.">
//                                     <span class="OiePBf-zPjgPe VYBDae-JX-UHGRz"></span>
//                                     <span class="bHC-Q" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span>
//                                     <span class="VYBDae-JX-ank-Rtc0Jf" jsname="S5tZuc" aria-hidden="true">
//                                         <span class="bzc-ank" aria-hidden="true"><svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" class=" aoH">
//                                             <path d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z">
//                                             </path>
//                                         </svg>
//                                         </span>
//                                     </span>
//                                     <div class="VYBDae-JX-ano"></div>
//                                 </button>
//                                 <div class="ne2Ple-oshW8e-J9" id="tt-c55" role="tooltip" aria-hidden="true">Download
//                                 </div>
//                             </span>
//                         </div>
//                     </div>
//                     <div>
//                         <p>Dear Ahmed Hemdan,</p>
//                         <p>Your request had approved to join the training for ${course.c_title}</p>
//                         <br><br>
//                         <p style="text-align:right;direction:rtl"> تم قبولكم في الدورة  ${course.c_title}</p>
//                         <p style="text-align:right;direction:rtl">سيتواصل معكم احد ممثلينا في اقرب وقت ممكن  </p>
//                         <p style="text-align:right;direction:rtl">شكرا لاختيارك كاكسو</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// `,
//     };

//     try {
//       await transporter.sendMail(mailOptionsToUser);
//       await transporter.sendMail(mailOptionsToAdmin);
//       res.status(200).json({ message: 'Emails sent successfully' });
//     } catch (error: any) {
//       console.error('Nodemailer Error:', error);
//       res.status(500).json({
//         error: 'Error sending emails',
//         details: error.message,
//       });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
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
      secure: false, // use true for port 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptionsToUser = {
      from: `"Casco Group" <${smtpUser}>`,
      to: formData.email,
      subject: `Thank you for your interest in ${course.c_title}`,
      html: `
       <div style="text-align: center;">
            <img src="https://www.casco.com.eg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.60cc985c.png&w=256&q=75" alt="logo" />
            <div style="text-align: left;">
                <h2>Dear ${formData.name},</h2>
                <h4>Thank you for enrolling in the course "${course.c_title}". We have received your enrollment and our team will review it shortly.</h4>
                <p>We Will Contact You Soon</p>
                <p>For more infomation Please contact <a href="mailto:egy@casco.com.eg">mohamed@cascotec.com</a></p>
                <p>Best regards,<br/>Casco Group</p>
            </div>
            <div style="text-align: right;">
                <h2>, ${formData.name} السيد/ة</h2>
                <p><br/>${course.c_title_ar}لقد تلقينا طليكم للانضمام للدورة</p>
                <p>سيتم التواصل معكم في اقرب وقت </p>
                 <p>     لمزيد من المعلومات : يرجى التواصل مع
                  <a href="mailto:egy@casco.com.eg">mohamed@cascotec.com</a> </p>
                <p>اطيب التحيات<br/>كاسكو</p>
            </div>
          </div>`,
    };

    const mailOptionsToAdmin = {
      from: `"Casco Group" <${smtpUser}>`,
      to: 'mohamed@cascotec.com',
      subject: `New submission for ${course.c_title}`,
      html: `<div id=":nb" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd">
    <div id=":mj" class="a3s aiL msg-818784179456676395" style="display: flex; align-items: center; justify-content: center; min-height: 100vh;">
        <div style="text-align: center;">
            <div class="m_-818784179456676395main-container">
                <div class="m_-818784179456676395header" style="text-align: center;">
                    <img src="https://www.casco.com.eg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.60cc985c.png&w=256&q=75" alt="logo" class="CToWUd" data-bit="iit">
                </div>      
                <div class="m_-818784179456676395content" style="text-align: center;">
                    <div class="m_-818784179456676395main-img" style="display: flex; align-items: center; justify-content: center;">
                        <div class="a6S" dir="ltr" style="opacity: 0.01;top: 282.1px;">
                            <span data-is-tooltip-wrapper="true" class="a5q" jsaction="JIbuQc:.CLIENT">
                                <button class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE" jscontroller="PIVayb" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;" data-idom-class="CgzRE" jsname="hRZeKc" aria-label="Download attachment " data-tooltip-enabled="true" data-tooltip-id="tt-c55" data-tooltip-classes="AZPksf" id="" jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgwNTEzMDYzNDgwMjE5MjI2OCJd; 43:WyJpbWFnZS9qcGVnIl0.">
                                    <span class="OiePBf-zPjgPe VYBDae-JX-UHGRz"></span>
                                    <span class="bHC-Q" data-unbounded="false" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span>
                                    <span class="VYBDae-JX-ank-Rtc0Jf" jsname="S5tZuc" aria-hidden="true">
                                        <span class="bzc-ank" aria-hidden="true"><svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" class=" aoH">
                                            <path d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z">
                                            </path>
                                        </svg>
                                        </span>
                                    </span>
                                    <div class="VYBDae-JX-ano"></div>
                                </button>
                                <div class="ne2Ple-oshW8e-J9" id="tt-c55" role="tooltip" aria-hidden="true">Download
                                </div>
                            </span>
                        </div>
                    </div>
                    <div>
                        <p>New submission for the course ${course.c_title}</p>
                        <p>Name: ${formData.name}</p>
                        <p>Email: ${formData.email}</p>
                        <p>Phone: ${formData.telephone}</p>
                         <p>Address: ${formData.address}</p>
                         <p>Company: ${formData.company}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    };

    try {
      // Send emails
      await transporter.sendMail(mailOptionsToUser);
      await transporter.sendMail(mailOptionsToAdmin);

      return res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send emails' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
