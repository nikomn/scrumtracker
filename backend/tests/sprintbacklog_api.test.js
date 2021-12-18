const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const UserStory = require('../models/userstory')
const User = require('../models/user')
const SprintBacklog = require('../models/sprintbacklog')
const bcrypt = require('bcrypt')

const api = supertest(app)

let token = undefined

const getToken = async (props) => {
  const login = await api
    .post('/api/login')
    .send(props)
    
  return login.body.token
}

let demodata = [
  {
    name: 'Sprint 0',
  },
  {
    name: 'Sprint 1',
  },
  {
    name: 'Sprint 2',
  },
]

let demostories = [
  {
    story: 'As a user I want to create new user stories',
    priority: 1,
    status: 'new'
  },
  {
    story: 'As a user I want to modify user stories',
    priority: 2,
    status: 'new'
  },
  {
    story: 'As a user I want to delete user stories',
    priority: 99,
    status: 'new'
  },
]

const getBacklogs = async () => {
  const backlogs = await api.get('/api/sprintbacklogs')
  return backlogs
}

const getStories = async () => {
  const stories = await api.get('/api/userstories')
  return stories
}

const addUserStory = async (userStoryObject, id, token) => {
  //console.log('/api/sprintbacklogs/' + id + '/stories')
  const result = await api
    .post('/api/sprintbacklogs/' + id + '/stories')
    .set('Authorization', `bearer ${token}`)
    .send(userStoryObject)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  return result
}


beforeEach(async () => {
  await SprintBacklog.deleteMany({})
  await User.deleteMany({})

  let backlogObject1 = new SprintBacklog(demodata[0])
  let backlogObject2 = new SprintBacklog(demodata[1])
  let backlogObject3 = new SprintBacklog(demodata[2])
  
  await backlogObject1.save()
  await backlogObject2.save()
  await backlogObject3.save()

  await UserStory.deleteMany({})

  let storyObject1 = new UserStory(demostories[0])
  let storyObject2 = new UserStory(demostories[1])
  let storyObject3 = new UserStory(demostories[2])
  
  await storyObject1.save()
  await storyObject2.save()
  await storyObject3.save()

})

test('sprint backlogs are returned as json', async () => {
  await api
    .get('/api/sprintbacklogs')
    .expect(200)
    .expect('Content-Type', /application\/json/) 
})

test('all sprint backlogs are returned', async () => {
  const response = await getBacklogs()

  expect(response.body).toHaveLength(demodata.length)
})

test('User story can be added to existing backlog', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  const allStories = await getStories()
  let allBacklogs = await getBacklogs()
  //console.log(allBacklogs.body)
  
  await addUserStory(allStories.body[0], allBacklogs.body[0].id, token)

  allBacklogs = await getBacklogs()
  //console.log(allStories.body[3])
  expect(allBacklogs.body[0].userstories[0].story).toBe('As a user I want to create new user stories')
  expect(allBacklogs.body[0].userstories[0].priority).toBe(1)
  expect(allBacklogs.body[0].userstories[0].status).toBe('new')
  
})

afterAll(() => {
  mongoose.connection.close()
})