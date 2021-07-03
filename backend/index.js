require('dotenv').config()
const UserStory = require('./models/userstory')
const express = require('express')
const app = express()
app.use(express.static('build'))
app.use(express.json())

const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Scrum Tracker app backend</h1>')
})

app.get('/api/userstories', (req, res) => {
  UserStory.find({}).then(stories => {
    res.json(stories)
  })
})


app.post('/api/userstories', (request, response) => {
  //console.log(request.body)
  const body = request.body

  if (!body.story) {
    return response.status(400).json({ 
      error: 'story is empty' 
    })
  }

  const newStoryObject = new UserStory({
    story: body.story,
    date: new Date(),
    status: 'new',
    priority: 9999
  })

  newStoryObject.save().then(savedUserStory => {
    response.json(savedUserStory)
  })


})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})