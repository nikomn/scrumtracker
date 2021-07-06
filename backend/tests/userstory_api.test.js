const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const UserStory = require('../models/userstory')

const api = supertest(app)

let demodata = [
  {
    id: 1,
    story: 'As a user I want to create new user stories',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done'
  },
  {
    id: 2,
    story: 'As a user I want to modify user stories',
    priority: 2,
    date: '2021-06-17T08:32:22.221Z',
    status: 'in progress'
  },
  {
    id: 3,
    story: 'As a user I want to delete user stories',
    priority: 99,
    date: '2021-06-17T08:34:12.091Z',
    status: 'not started'
  },
]

const getStories = async () => {
  const stories = await api.get('/api/userstories')
  return stories
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

afterAll(() => {
  mongoose.connection.close()
})