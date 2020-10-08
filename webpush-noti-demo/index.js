const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Set static path
app.use(express.static(path.join(__dirname, 'client')))

app.use(bodyParser.json())

const publicVapidKey =
  'BJppFutIkFWmah9BetNICYfjSglgwod_tlTgb_ahBIG7ZTepeUVtfdhmIOd18lumWVeklI27-3g61fqyRKSseWw'
const privateVapidKey = 'z1vfo_ykVPNUwlp39B2oUytgaJhymw6mW0F4EtpnXw0'

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey)

//Subcribe Route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription object
  const subscription = req.body

  // Send 201 - resource created
  res.status(201).json({})

  const payload = JSON.stringify({ title: 'push test' })

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err))
})

const port = 3003

app.listen(port, () => console.log(`Server started on port ${port}`))
