const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')
const dotenv = require("dotenv")
dotenv.config()

let api_key = process.env.API_KEY
let domain = process.env.DOMAIN

const auth = {
  auth: {
    api_key: api_key,
    domain: domain
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