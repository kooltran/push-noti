import axios from 'axios'

export const fetchMenuApi = () => {
  return axios.get(`/menuList`).then(res => res.data)
}
