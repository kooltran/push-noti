import axios from 'axios'

const targetUrl = 'http://localhost:3000'

export const fetchCurrentUser = () => {
  return axios.get(`/user`).then(res => res.data)
}
