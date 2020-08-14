const request = require('request')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
const puppeteer = require('puppeteer')
const MenuList = require('./models/menu')

const MongoClient = require('mongodb').MongoClient

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const app = express()
const PORT = process.env.PORT || 8797
const db = mongoose.connection

dotenv.config()

const URL = 'https://www.anzi.com.vn/'

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

    const menuList = await page.evaluate(() => {
      const items = document.querySelectorAll('#list_menu .item-menu')
      let menuInfo = []
      items.forEach(item => {
        const img = item.children[0].children[0].src
        const name = item.children[1].textContent.trim()
        menuInfo.push({ name, img })
      })
      return menuInfo
    })
    menuList.map((item = {}) =>
      MenuList.updateOne({ name: item.name, img: item.img }, item, {
        upsert: true
      })
    )

    return menuList
  } catch (error) {
    console.log(error)
  }
}

getMenuList()

app.get('/menuList', async (request, response) => {
  try {
    const res = await MenuList.find().exec()
    response.send(res)
  } catch (error) {
    response.status(500).send(error)
  }
})

app.listen(PORT, () => {
  console.log('Server started on http://localhost:' + PORT)
})

module.exports = app
