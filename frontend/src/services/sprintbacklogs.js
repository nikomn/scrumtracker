import axios from 'axios'
const baseUrl = '/api/sprintbacklogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const addStory = (id, story) => {
  const request = axios.post(`${baseUrl}/${id}/stories`, story)
  return request.then(response => response.data)
}

export default { getAll, create, addStory }