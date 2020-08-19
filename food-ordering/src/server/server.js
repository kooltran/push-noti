const request = require('request')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
const puppeteer = require('puppeteer')
const bodyParser = require('body-parser')
const cors = require('cors')

const MenuList = require('./models/menu')

dotenv.config()

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const app = express()
const PORT = process.env.PORT || 8797
const db = mongoose.connection

app.use(bodyParser.json())
app.use(cors())

const URL = 'https://www.anzi.com.vn/'

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB connected'))
db.on('error', err => {
  console.log('DB connection error:', err.message)
})

const getMenuList = async () => {
  try {
    const brower = await puppeteer.launch()
    const page = await brower.newPage()
    await page.goto(URL)
    const existList = await MenuList.find()

    const menuList = await page.evaluate(() => {
      const items = document.querySelectorAll('#list_menu .item-menu')
      let menuInfo = []
      items.forEach((item = {}) => {
        const img = item.children[0].children[0].src
        const name = item.children[1].textContent.trim()
        menuInfo.push({ name, img })
      })
      return menuInfo
    })

    if (existList.length === 0) {
      MenuList.insertMany(menuList)
    } else {
      existList.map(ele => {
        menuList.map(async (item = {}) =>
          MenuList.updateOne({ _id: ele.id }, item, { upsert: true })
        )
      })
    }
    return menuList
  } catch (error) {
    console.log(error)
  }
}

getMenuList()

app.get('/menuList', async (request, response) => {
  try {
    const res = await MenuList.find()
    response.send(res)
  } catch (error) {
    response.status(500).send(error)
  }
})

// app.post('/order', async (req, res) => {
//   try {
//     const order = await new OrderDish(req.body).save()
//     return res.send({
//       message: 'Created new order successfully',
//       data: order,
//     })
//   } catch (err) {
//     console.log(err)
//     res.status(500).send(err)
//   }
// })

// app.use('/order', orderRoute)

// app.use('/users', userRoute)

// app.use(jwt())
// app.use(errorHandler)

app.listen(PORT, () => {
  console.log('Server started on http://localhost:' + PORT)
})

module.exports = app
