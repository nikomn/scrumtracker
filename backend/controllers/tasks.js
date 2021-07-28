/**
 * @file tasks.js is a module for handling all of the routes related to tasks.
 */

const tasksRouter = require('express').Router()
const Task = require('../models/task')
 
tasksRouter.get('/', (request, response) => {
  Task.find({}).then(tasks => {
    response.json(tasks.map(story => story.toJSON()))
  })
})
  
tasksRouter.post('/', (request, response) => {
   
  const body = request.body
 
  if (!body.name || body.name === '') {
    return response.status(400).json({ 
      error: 'no name defined for task' 
    })
  }
 
  let status = body.status
  if (status === '') {
    status = 'new'
  }
 
 
  const newStoryObject = new Task({
    story: body.story,
    date: new Date(),
    status: status
  })
 
  newStoryObject.save().then(savedTask => {
    response.json(savedTask)
  })
})
  
module.exports = tasksRouter