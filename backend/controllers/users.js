const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  try {
    const savedUser = await user.save()

    response.json(savedUser)
    
  } catch (error) {
    return response.status(400).json({
      error: 'Username already in use!'
    })
  }

  
})

module.exports = usersRouter