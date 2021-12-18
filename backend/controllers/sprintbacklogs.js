/**
 * @file sprintbacklogs.js is a module for handling all of the routes related to sprint backlogs.
 */

const sprintBacklogsRouter = require('express').Router()
const SprintBacklog = require('../models/sprintbacklog')
const UserStory = require('../models/userstory')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}
 
sprintBacklogsRouter.get('/', async (request, response) => {
  const backlogs = await SprintBacklog.find({}).populate('userstories', {
    story: 1,
    priority: 1,
    status: 1
  })
  response.json(backlogs.map((backlog) => backlog.toJSON()))
  // SprintBacklog.find({}).then(backlogs => {
  //   response.json(backlogs.map(backlog => backlog.toJSON()))
  // })
})

 
sprintBacklogsRouter.post('/', (request, response) => {
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    
  } catch (error) {
    return response.status(401).json({ error: 'token missing or invalid' })
    
  }
   
  const body = request.body
 
  if (!body.name || body.name === '') {
    return response.status(400).json({ 
      error: 'backlog is missing' 
    })
  }
 
 
  const newBacklogObject = new SprintBacklog({
    name: body.name
  })
 
  newBacklogObject.save().then(savedSprintBacklog => {
    response.json(savedSprintBacklog)
  })
})
 
sprintBacklogsRouter.post('/:id/stories', async (request, response) => {
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    
  } catch (error) {
    return response.status(401).json({ error: 'token missing or invalid' })
    
  }
  
  const storyToAdd = request.body
  console.log(storyToAdd)

  const story = await UserStory.findById(storyToAdd.id)

  if (!story) {
    console.log('Story not found error!')
    return response.status(400).json({ 
      error: 'story not found' 
    })
  }

  SprintBacklog.findById(request.params.id).populate('userstories', {
    story: 1,
    priority: 1,
    status: 1
  }).then((backlog) => {
    backlog.userstories = backlog.userstories.concat(story)
    backlog.save()
    response.json(backlog)
  })
  
})
  
module.exports = sprintBacklogsRouter