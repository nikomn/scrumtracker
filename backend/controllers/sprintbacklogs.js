/**
 * @file sprintbacklogs.js is a module for handling all of the routes related to sprint backlogs.
 */

const sprintBacklogsRouter = require('express').Router()
const SprintBacklog = require('../models/sprintbacklog')
const UserStory = require('../models/userstory')
 
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
  const storyToAdd = request.body

  const story = await UserStory.findById(storyToAdd.id)

  if (!story) {
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