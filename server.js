const express = require("express")
const sendMail = require("./mail")
const path = require('path')
const app = express()
const dotenv = require("dotenv")
dotenv.config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/email', (req, res) => {
  console.log('Data: ', req.body)
  const subject = req.body.subject
  const email = req.body.email
  const text = req.body.text

  sendMail(email, subject, text, function(err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" })
    } else {
      res.json({ message: "Email Sent!" })
    }
  })
})

app.use(express.static(__dirname + '/docs'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT)