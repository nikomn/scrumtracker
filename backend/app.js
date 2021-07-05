const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const userStoriesRouter = require('./controllers/userstories')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

//logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/userstories', userStoriesRouter)

module.exports = app