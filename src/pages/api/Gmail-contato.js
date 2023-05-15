export default async function handler(req, res) {
  try {
    // eslint-disable-next-line no-undef
    const nodemailer = require('nodemailer')
    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        // eslint-disable-next-line no-undef
        user: process.env.GMAIL_SERVER_NAME,
        // eslint-disable-next-line no-undef
        clientId: process.env.GMAIL_CLIENT_ID,
        // eslint-disable-next-line no-undef
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        // eslint-disable-next-line no-undef
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        // eslint-disable-next-line no-undef
        accessToken: process.env.GMAIL_ACCESS_TOKEN,
        expires: 1484314697598
      }
    })

    const mailData = {
      from: req.body.email,
      // eslint-disable-next-line no-undef
      to: process.env.GMAIL_SERVER_SEND,
      subject: `WebSite: ${req.body.title}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

      <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title></title>
          <!--[if (mso 16)]>
          <style type="text/css">
          a {text-decoration: none;}
          </style>
          <![endif]-->
          <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
          <!--[if gte mso 9]>
      <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
          <!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
          <!--<![endif]-->
      </head>

      <body>
          <div class="es-wrapper-color">
              <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#f1f1f1"></v:fill>
            </v:background>
          <![endif]-->
              <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                      <tr>
                          <td class="esd-email-paddings" valign="top">
                              <table class="es-header esd-header-popover" cellspacing="0" cellpadding="0" align="center">
                                  <tbody>
                                      <tr>
                                          <td class="esd-stripe" align="center">
                                              <table class="es-header-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                  <tbody>
                                                      <tr>
                                                          <td class="esd-structure es-p30t es-p30b es-p40r es-p40l" align="left">
                                                              <table cellspacing="0" cellpadding="0" width="100%">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td class="esd-container-frame" width="520" align="left">
                                                                              <table width="100%" cellspacing="0" cellpadding="0">
                                                                                  <tbody>
                                                                                      <tr>
                                                                                          <td align="center" class="esd-block-text">
                                                                                              <p style="color: #333333; font-size: 25px;"><strong>E-mail Recebido do Site</strong></p>
                                                                                          </td>
                                                                                      </tr>
                                                                                  </tbody>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                  <tbody>
                                      <tr>
                                          <td class="esd-stripe" align="center">
                                              <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                  <tbody>
                                                      <tr>
                                                          <td class="esd-structure" align="left">
                                                              <table width="100%" cellspacing="0" cellpadding="0">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                              <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                      <td align="left" class="esd-block-text es-p5t es-p15b">
                                                                                          <h2>${req.body.title}</h2>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-text" align="left">
                                                                                          <p><b>nome: </b>${req.body.name}</p>
                                                                                          <p><b>E-mail: </b>${req.body.email}</p>
                                                                                          <p><b>Contato: </b>${req.body.whatsApp}</p>
                                                                                          <p><b>Assunto: </b>${req.body.Assunto}</p>
                                                                                          <p><b>Menssagem: </b>${req.body.Message}</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table class="es-footer" cellspacing="0" cellpadding="0" align="center">
                                  <tbody>
                                      <tr>
                                          <td class="esd-stripe" align="center">
                                              <table class="es-footer-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                  <tbody>
                                                      <tr>
                                                          <td class="esd-structure es-p40t es-p40b es-p40r es-p40l" align="left">
                                                              <table width="100%" cellspacing="0" cellpadding="0">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                              <table width="100%" cellspacing="0" cellpadding="0">
                                                                                  <tbody>
                                                                                      <tr>
                                                                                          <td class="esd-block-text" align="left">
                                                                                              <p>Copyright © 2020-2023&nbsp;<strong></strong><strong>Unik Cabo Frio</strong><strong></strong>, All Rights Reserved.</p>
                                                                                          </td>
                                                                                      </tr>
                                                                                  </tbody>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center">
                                  <tbody>
                                      <tr>
                                          <td class="esd-stripe" align="center">
                                              <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                  <tbody>
                                                      <tr>
                                                          <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                              <table width="100%" cellspacing="0" cellpadding="0">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                              <table width="100%" cellspacing="0" cellpadding="0">
                                                                                  <tbody>
                                                                                      <tr>
                                                                                          <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://zyroja.stripocdn.email/content/guids/CABINET_55768d0791066c13541ea740924adec7fac0e0e224468aef12a1619bc2981a76/images/favicon.png" alt style="display: block;" width="100"></a></td>
                                                                                      </tr>
                                                                                  </tbody>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </body>

      </html>`
    }

    smtpTransport.sendMail(mailData, (err, info) => {
      if (err) {
        return res.status(200).json(err)
      }
      return res.status(200).json(info)
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json(error)
  }
}
