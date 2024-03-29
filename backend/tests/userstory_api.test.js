const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const UserStory = require('../models/userstory')
const User = require('../models/user')
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
    story: 'As a user I want to create new user stories',
    priority: 1,
    storypoints: 10,
    status: 'new',
    comments: []
  },
  {
    story: 'As a user I want to modify user stories',
    priority: 2,
    storypoints: 5,
    status: 'new',
    comments: []
  },
  {
    story: 'As a user I want to delete user stories',
    priority: 99,
    storypoints: 15,
    status: 'new',
    comments: []
  },
]

let demotasks = [
  {
    name: 'Task 1',
    status: 'done'
  },
  {
    story: 'Task 2',
    status: 'waiting'
  },
  {
    story: 'Task 3',
    status: 'not started'
  },
]

const getStories = async () => {
  const stories = await api.get('/api/userstories')
  return stories
}

const addNewUserStory = async (newUserStoryObject, token) => {
  const result = await api
    .post('/api/userstories')
    .set('Authorization', `bearer ${token}`)
    .send(newUserStoryObject)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  return result
}

const addTask = async (taskObject, id, token) => {
  //console.log('/api/sprintbacklogs/' + id + '/stories')
  const result = await api
    .post('/api/userstories/' + id + '/tasks')
    .set('Authorization', `bearer ${token}`)
    .send(taskObject)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  return result
}

const addComment = async (commentObject, id, token) => {
  //console.log('/api/sprintbacklogs/' + id + '/stories')
  const result = await api
    .post('/api/userstories/' + id + '/comments')
    .set('Authorization', `bearer ${token}`)
    .send(commentObject)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  return result
}

const modifyUserStory = async (id, modifiedData, token) => {
  const result = await api
    .put('/api/userstories/' + id)
    .set('Authorization', `bearer ${token}`)
    .send(modifiedData)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  return result
}

const deleteUserStory = async (id, token) => {
  const result = await api
    .delete('/api/userstories/' + id)
    .set('Authorization', `bearer ${token}`)
    .expect(204)
  return result
}

beforeEach(async () => {
  await UserStory.deleteMany({})
  await User.deleteMany({})

  let storyObject1 = new UserStory(demodata[0])
  let storyObject2 = new UserStory(demodata[1])
  let storyObject3 = new UserStory(demodata[2])
  
  await storyObject1.save()
  await storyObject2.save()
  await storyObject3.save()

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

test('new user story with priority "123", status "new", storypoints "1" and comment "test" can be added', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)
  
  
  const newUserStory = {
    story: 'Testing adding a new user story',
    priority: 123,
    storypoints: 1,
    status: 'new',
    comment: {
      commentText: 'test'
    }
  }

  await addNewUserStory(newUserStory, token)

  const allStories = await getStories()
  //console.log(allStories.body[3])
  expect(allStories.body).toHaveLength(demodata.length + 1)
  expect(allStories.body[3].story).toBe('Testing adding a new user story')
  expect(allStories.body[3].priority).toBe(123)
  expect(allStories.body[3].storypoints).toBe(1)
  expect(allStories.body[3].status).toBe('new')
  expect(allStories.body[3].comments[0].commentText).toBe('test')
  
})

test('User story priority can be modified', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  let allStories = await getStories()
  
  const id = allStories.body[0].id

  
  const modifiedPriority = {
    'priority':9999999,
  }

  await modifyUserStory(id, modifiedPriority, token)
  allStories = await getStories()

  expect(allStories.body[0].priority).toBe(9999999)

})

test('User story storypoints can be modified', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  let allStories = await getStories()
  
  const id = allStories.body[0].id

  
  const modifiedStorypoints = {
    'storypoints':9999999,
  }

  await modifyUserStory(id, modifiedStorypoints, token)
  allStories = await getStories()

  expect(allStories.body[0].storypoints).toBe(9999999)

})

test('User story status can be modified', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  let allStories = await getStories()
  
  const id = allStories.body[0].id

  
  const modifiedStatus = {
    'status':'done',
  }

  await modifyUserStory(id, modifiedStatus, token)
  allStories = await getStories()

  expect(allStories.body[0].status).toBe('done')

})

test('User story can be deleted', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  let allStories = await getStories()

  const storyToRemove = allStories.body[0]
  const numberOfStories = allStories.body.length

  //console.log(numberOfStories)

  await deleteUserStory(storyToRemove.id, token)
  allStories = await getStories()

  expect(allStories.body[0]).not.toBe(storyToRemove)
  expect(allStories.body.length).toBe(numberOfStories - 1)

})

test('Task can be added to existing userstory', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  let allStories = await getStories()
  
  await addTask(demotasks[0], allStories.body[0].id, token)

  allStories = await getStories()
  //console.log(allStories.body[3])
  expect(allStories.body[0].tasks[0].name).toBe('Task 1')
  expect(allStories.body[0].tasks[0].status).toBe('done')
  
})

test('Comment can be added to existing userstory', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  let allStories = await getStories()

  const comment = {
    commentText: 'test comment'
  }
  
  await addComment(comment, allStories.body[0].id, token)

  allStories = await getStories()
  expect(allStories.body[0].comments[0].commentText).toBe('test comment')
  
})

test('Userstory can not be added with invalid status', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  const newUserStory = {
    story: 'Testing adding a new user story',
    priority: 123,
    status: 'not valid'
  }
  await api
    .post('/api/userstories')
    .set('Authorization', `bearer ${token}`)
    .send(newUserStory)
    .expect(400)
    .expect('Content-Type', /application\/json/)

  const allStories = await getStories()
  expect(allStories.body).toHaveLength(demodata.length)
  
  
})

test('Task can not be added with invalid status', async () => {
  const passwordHash = await bcrypt.hash('testing', 10)
  let user = new User({ username: 'testing', passwordHash })

  await user.save()
  user = {
    username: 'testing',
    password: 'testing',
  }

  token = await getToken(user)

  let allStories = await getStories()
  const numOfTasks = allStories.body[0].tasks.length

  await api
    .post('/api/userstories/' + allStories.body[0].id + '/tasks')
    .set('Authorization', `bearer ${token}`)
    .send(demotasks[2])
    .expect(400)
    .expect('Content-Type', /application\/json/)
  
  allStories = await getStories()
  //console.log(allStories.body[3])
  expect(allStories.body[0].tasks.length).toBe(numOfTasks)
  
})

afterAll(() => {
  mongoose.connection.close()
})