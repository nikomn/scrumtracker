import axios from 'axios'
const baseUrl = '/api/userstories'

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

const update = (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('id:', id)
  console.log(newObject)
  console.log(`${baseUrl}/${id}`, newObject)
  //const request = axios.put(`${baseUrl}/${id}`, newObject)
  //console.log(request)
  //return request.then(response => response.data)
  //return axios.put(`${baseUrl}/${id}`, newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject, config)
  return request.then(response => response.data)
}

const remove = id => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.delete(`${baseUrl}/${id}`, config)
  return request.then(response => response.data)
}

const addTask = (id, task) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.post(`${baseUrl}/${id}/tasks`, task, config)
  return request.then(response => response.data)
}

const addComment = (id, comment) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.post(`${baseUrl}/${id}/comments`, comment, config)
  return request.then(response => response.data)
}


export default { getAll, create, update, remove, addTask, addComment, setToken }