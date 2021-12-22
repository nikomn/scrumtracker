const router = require('express').Router()
const UserStory = require('../models/userstory')
const Comment = require('../models/comment')
const Task = require('../models/task')
const Sprintbacklog = require('../models/sprintbacklog')
const User = require('../models/user')

router.post('/reset', async (request, response) => {
  await UserStory.deleteMany({})
  await Comment.deleteMany({})
  await Task.deleteMany({})
  await Sprintbacklog.deleteMany({})
  await User.deleteMany({})

  response.status(204).end()
})

module.exports = router