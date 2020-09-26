const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: 'bae008c826a3d10f248c9ca8e89eefab-cb3791c4-487a0ea7',
    domain: 'sandbox1650025a850b4bed8b9b843f8feef20a.mailgun.org'
  }
}

const transporter = nodemailer.createTransport(mailGun(auth))


const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'jordan1824@icloud.com',
    subject: subject,
    text: text
  }
  
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, data)
    }
  })
}

module.exports = sendMail