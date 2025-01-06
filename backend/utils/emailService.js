const nodemailer = require('nodemailer')

const sendEmail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject:  `Nuevo mensaje de contacto de ${name}`,
    text: `De: ${name} (${email}\n\n${message})`,
  }
  
  await transporter.sendMail(mailOptions)
}

module.exports = { sendEmail }