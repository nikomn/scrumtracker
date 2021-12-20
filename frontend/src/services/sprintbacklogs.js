import axios from 'axios'
const baseUrl = '/api/sprintbacklogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const config = {
    headers: { Authorization: token },
  }
  return axios.post(baseUrl, newObject, config)
}

const addStory = (id, story) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.post(`${baseUrl}/${id}/stories`, story, config)
  return request.then(response => response.data)
}

export default { getAll, create, addStory, setToken }