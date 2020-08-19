import axios from 'axios'

const targetUrl = 'http://localhost:8797'

export const fetchMenuApi = () => {
  return axios.get(`${targetUrl}/menuList`).then(res => res.data)
}
