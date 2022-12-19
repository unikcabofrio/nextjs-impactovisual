export default async function handler(req, res) {
  var transport = {
    service: 'Gmail',
    auth: {
      // eslint-disable-next-line no-undef
      user: process.env.GMAIL_SERVER_NAME,
      // eslint-disable-next-line no-undef
      pass: process.env.GMAIL_SERVER_PASSWORD
    }
  }

  try {
    // eslint-disable-next-line no-undef
    var nodemailer = require('nodemailer')

    var smtpTransport = nodemailer.createTransport(transport)

    const mailData = {
      from: 'contato.impactocf@gmail.com',
      to: req.body.email,
      subject: `Site: ${req.body.name} Enviou uma Menssagen`,
      text: `Entrou em contato pelo site: https://impactovisual.vercel.app/ \n\n*Nome: ${req.body.name}\n*E-mail: ${req.body.email}\n*Assunto: ${req.body.subject}\n*Menssagen: ${req.body.message}`
    }

    smtpTransport.sendMail(mailData, function (err, info) {
      if (err) {
        return res.status(200).json(err)
      } else {
        return res.status(200).json(info)
      }
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json(error)
  }
}
