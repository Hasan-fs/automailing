const nodemailer = require('nodemailer');

// E-posta gönderme işlevi
async function sendMail({ email, subject, name }) {
  console.log(email, name, subject)
  /* // SMTP sunucusu yapılandırması
  let transporter = nodemailer.createTransport({
    service: "sevyat.com",
    host: "sevyat.com",
    port: 25,
    secure: true,
    auth: {
      user: 'sales1@sevyat.com',
      pass: 'llll',
    },
    // Daha güvenli bağlantılar için TLS yapılandırması
    //tls: {rejectUnauthorized: false}
  });

  // E-posta içeriği
  let mailOptions = {
    from: 'sales1@sevyat.com',
    to: email,
    subject: subject,
    text: 'Bu, Node.js ile gönderilen otomatik bir e-postadır.',
    // HTML içeriği eklemek
    html: '<p>Bu, <strong>Node.js</strong> ile gönderilen otomatik bir e-postadır.</p>',
  };

  // E-postayı gönder
  try {
    let info = await nodemailer.transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi: %s', info.messageId);
  } catch (error) {
    console.error('E-posta gönderme hatası: %s', error);
  } */
};

module.exports = sendMail;

// Fonksiyonu çağır
//sendMail();

