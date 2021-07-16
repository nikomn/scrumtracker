const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const UserStory = require('../models/userstory')
const SprintBacklog = require('../models/sprintbacklog')

const api = supertest(app)

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

const getBacklogs = async () => {
  const backlogs = await api.get('/api/sprintbacklogs')
  return backlogs
}

const getStories = async () => {
  const stories = await api.get('/api/userstories')
  return stories
}

const addUserStory = async (userStoryObject, id) => {
  const result = await api
    .post('/api/userstories/' + id + '/stories')
    .send(userStoryObject)
    .expect(204)
    .expect('Content-Type', /application\/json/)
  return result
}


beforeEach(async () => {
  await SprintBacklog.deleteMany({})

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
  const allStories = await getStories()
  let allBacklogs = await getBacklogs()
  console.log(allBacklogs[0])
  
  await addUserStory(allStories[0], allBacklogs[0].id)

  allBacklogs = await getBacklogs()
  //console.log(allStories.body[3])
  expect(allStories.body[0].userstories[0].story).toBe('As a user I want to create new user stories')
  expect(allStories.body[0].userstories[0].priority).toBe(1)
  expect(allStories.body[0].userstories[0].status).toBe('done')
  
})

afterAll(() => {
  mongoose.connection.close()
})