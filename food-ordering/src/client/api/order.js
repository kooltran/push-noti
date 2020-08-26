import axios from 'axios'

const targetUrl = 'http://localhost:3000'

export const createOrder = orders => {
  return axios.post(`/orders/create`, orders).then(res => res.data)
}

export const getOrders = () => {
  return axios.get(`/orders/list`).then(res => res.data)
}
