/**
 * @file userstories.js is a module for handling all of the routes related to userstories.
 */

const userStoriesRouter = require('express').Router()
const UserStory = require('../models/userstory')
const Task = require('../models/task')

userStoriesRouter.get('/', async (request, response) => {
  const userstories = await UserStory.find({}).populate('tasks', {
    name: 1,
    status: 1
  })
  response.json(userstories.map((story) => story.toJSON()))
  
  
  // UserStory.find({}).then(stories => {
  //   response.json(stories.map(story => story.toJSON()))
  // })
})

/* userStoriesRouter.get('/', async (request, response) => { 
  const stories = await UserStory.find({})
  response.json(stories.map(story => story.toJSON()))
}) */



userStoriesRouter.post('/', (request, response) => {
  
  const body = request.body

  if (!body.story || body.story === '') {
    return response.status(400).json({ 
      error: 'story is empty' 
    })
  }

  let status = body.status
  if (status === '') {
    status = 'new'
  }
  if (status !== 'new' && status !== 'planned' && status !== 'done') {
    return response.status(400).json({ 
      error: 'status must be new, planned, or done' 
    })
  }


  const newStoryObject = new UserStory({
    story: body.story,
    date: new Date(),
    status: status,
    priority: body.priority
  })

  newStoryObject.save().then(savedUserStory => {
    response.json(savedUserStory)
  })
})

userStoriesRouter.post('/:id/tasks', async (request, response) => {
  if (!request.body) {
    return response.status(400).json({ 
      error: 'task not found' 
    })
  }

  if (request.body.status !== 'waiting' && request.body.status !== 'doing' && request.body.status !== 'done') {
    return response.status(400).json({ 
      error: 'status must be waiting, doing, or done' 
    })
  }
  
  const taskToAdd = new Task(request.body)
  await taskToAdd.save()
  

  UserStory.findById(request.params.id).populate('tasks', {
    name: 1,
    status: 1
  }).then((story) => {
    story.tasks = story.tasks.concat(taskToAdd)
    story.save()
    response.json(story)
  })

})


userStoriesRouter.put('/:id', (request, response) => {
  UserStory.findByIdAndUpdate(request.params.id,{ $set:request.body })
    .then(() => {
      response.json(request.body)
    })
})

userStoriesRouter.delete('/:id', (request, response) => {
  UserStory.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
})


module.exports = userStoriesRouter