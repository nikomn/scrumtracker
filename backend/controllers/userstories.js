const userStoriesRouter = require('express').Router()
const UserStory = require('../models/userstory')

userStoriesRouter.get('/', (request, response) => {
  UserStory.find({}).then(stories => {
    response.json(stories.map(story => story.toJSON()))
  })
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


module.exports = userStoriesRouter