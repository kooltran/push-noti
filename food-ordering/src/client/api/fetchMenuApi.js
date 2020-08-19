import axios from 'axios'

const targetUrl = 'http://localhost:8797'

export const fetchMenuApi = searchKey => {
  return axios.get(`${targetUrl}/menuList`).then(res => res.data)
}
