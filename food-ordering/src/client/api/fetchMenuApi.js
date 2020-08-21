import axios from 'axios'

const targetUrl = 'http://localhost:3000'

export const fetchMenuApi = () => {
  return axios.get(`/menuList`).then(res => res.data)
}
