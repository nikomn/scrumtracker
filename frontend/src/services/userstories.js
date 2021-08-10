import axios from 'axios'
const baseUrl = '/api/userstories'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  console.log('id:', id)
  console.log(newObject)
  console.log(`${baseUrl}/${id}`, newObject)
  //const request = axios.put(`${baseUrl}/${id}`, newObject)
  //console.log(request)
  //return request.then(response => response.data)
  //return axios.put(`${baseUrl}/${id}`, newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const addTask = (id, task) => {
  const request = axios.post(`${baseUrl}/${id}/tasks`, task)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove, addTask }