const { sendEmail } = require('../utils/emailService')

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Debes completar todos los campos' })
  }

  try {
    await sendEmail(name, email, message)
    res.status(200).json({ success: 'Mensaje enviado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el mensaje' })
  }
}

module.exports = { sendMessage }
