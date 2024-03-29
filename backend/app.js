const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const userStoriesRouter = require('./controllers/userstories')
const sprintBacklogsRouter = require('./controllers/sprintbacklogs')
const tasksRouter = require('./controllers/tasks')
const commentsRouter = require('./controllers/comments')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/userstories', userStoriesRouter)
app.use('/api/sprintbacklogs', sprintBacklogsRouter)
app.use('/api/tasks', tasksRouter)
app.use('/api/comments', commentsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/test_router')
  app.use('/api/testing', testingRouter)
}


//logger.info('connecting to', config.MONGODB_URI)

const path = require('path')
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')))

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

module.exports = app