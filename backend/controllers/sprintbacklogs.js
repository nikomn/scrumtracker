/**
 * @file sprintbacklogs.js is a module for handling all of the routes related to sprint backlogs.
 */

const sprintBacklogsRouter = require('express').Router()
const SprintBacklog = require('../models/sprintbacklogs')
 
sprintBacklogsRouter.get('/', (request, response) => {
  SprintBacklog.find({}).then(backlogs => {
    response.json(backlogs.map(backlog => backlog.toJSON()))
  })
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
 
sprintBacklogsRouter.post('/:id/stories', (request, response) => {
  const storyToAdd = request.body
  const backlog = SprintBacklog.findById(request.params.id).then(() => {
    backlog.userstories = backlog.userstories.concat(storyToAdd)
    backlog.save()
    response.status(204).end()
  })
  
})
  
module.exports = sprintBacklogsRouter