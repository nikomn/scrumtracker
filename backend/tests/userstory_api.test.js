const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const UserStory = require('../models/userstory')

const api = supertest(app)

let demodata = [
  {
    story: 'As a user I want to create new user stories',
    priority: 1,
    status: 'done'
  },
  {
    story: 'As a user I want to modify user stories',
    priority: 2,
    status: 'in progress'
  },
  {
    story: 'As a user I want to delete user stories',
    priority: 99,
    status: 'not started'
  },
]

const getStories = async () => {
  const stories = await api.get('/api/userstories')
  return stories
}

const addNewUserStory = async (newUserStoryObject) => {
  const result = await api
    .post('/api/userstories')
    .send(newUserStoryObject)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  return result
}

beforeEach(async () => {
  await UserStory.deleteMany({})

  let productObject1 = new UserStory(demodata[0])
  let productObject2 = new UserStory(demodata[1])
  let productObject3 = new UserStory(demodata[2])
  
  await productObject1.save()
  await productObject2.save()
  await productObject3.save()

})


test('user stories are returned as json', async () => {
  await api
    .get('/api/userstories')
    .expect(200)
    .expect('Content-Type', /application\/json/) 
})

test('all user stories are returned', async () => {
  const response = await getStories()

  expect(response.body).toHaveLength(demodata.length)
})

test('new user story with priority 123 can be added', async () => {
  const newUserStory = {
    story: 'Testing adding a new user story',
    priority: 123,
    status: 'new'
  }

  await addNewUserStory(newUserStory)

  const allProducts = await getStories()
  //console.log(allProducts.body[3])
  expect(allProducts.body).toHaveLength(demodata.length + 1)
  expect(allProducts.body[3].story).toBe('Testing adding a new user story')
  expect(allProducts.body[3].priority).toBe(123)
  
})

afterAll(() => {
  mongoose.connection.close()
})