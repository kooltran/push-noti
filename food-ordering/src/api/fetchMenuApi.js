import axios from 'axios'
const queryString = require('query-string')

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const targetUrl = 'https://www.anzi.com.vn/home/getListMenu'

export const fetchMenuApi = searchKey => {
  return axios
    .post(targetUrl, queryString.stringify({ date: '2020-08-11' }))
    .then(res => res.data)
}
