const express = require("express")
const sendMail = require("./mail")
const path = require('path')
const app = express()


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


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, () => {
  console.log("Server started running on port 3000")
})