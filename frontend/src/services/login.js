import axios from 'axios'
const baseUrl = '/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const create = async userdata => {
  const response = await axios.post('/api/users', userdata)
  return response.data
}

export default { login, create }