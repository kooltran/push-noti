import axios from 'axios'

export const createOrder = orders => {
  return axios.post(`/orders/create`, orders).then(res => res.data)
}

export const getOrders = () => {
  return axios.get(`/orders/list`).then(res => res.data)
}

export const getAllOrders = () => {
  return axios.get(`/orders/all`).then(res => res.data)
}
