/**
 * @file userstories.js is a module for handling all of the routes related to userstories.
 */

const userStoriesRouter = require('express').Router()
const UserStory = require('../models/userstory')
const Task = require('../models/task')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

userStoriesRouter.get('/', async (request, response) => {
  const userstories = await UserStory.find({}).populate('tasks', {
    name: 1,
    status: 1
  }).populate('comments', {
    commentText: 1,
    date: 1
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



userStoriesRouter.post('/', async (request, response) => {
  
  const body = request.body

  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

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

    const commentsData = []

    if (body.comment) {
      const comment = new Comment({...body.comment, date: new Date()})
      await comment.save()
      commentsData.push(comment)
    }

  


    const newStoryObject = new UserStory({
      story: body.story,
      type: body.type,
      date: new Date(),
      status: status,
      priority: body.priority,
      storypoints: body.storypoints,
      comments: commentsData
    })

    newStoryObject.save().then(savedUserStory => {
      response.json(savedUserStory)
    })

  } catch (error) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
})

userStoriesRouter.post('/:id/tasks', async (request, response) => {
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    
  } catch (error) {
    return response.status(401).json({ error: 'token missing or invalid' })
    
  }



  

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
  }).populate('comments', {
    commentText: 1,
    date: 1
  }).then((story) => {
    story.tasks = story.tasks.concat(taskToAdd)
    story.save()
    response.json(story)
  })

})

userStoriesRouter.post('/:id/comments', async (request, response) => {
  if (!request.body) {
    return response.status(400).json({ 
      error: 'comment not found' 
    })
  }
  
  const newComment = new Comment({...request.body, date: new Date()})
  await newComment.save()
  

  UserStory.findById(request.params.id).populate('tasks', {
    name: 1,
    status: 1
  }).populate('comments', {
    commentText: 1,
    date: 1
  }).then((story) => {
    story.comments = story.comments.concat(newComment)
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