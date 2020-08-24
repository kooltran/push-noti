import axios from 'axios'

export const fetchCurrentUser = () => {
  return axios.get(`/user`).then(res => res.data)
}
