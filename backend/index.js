const express = require('express')
const app = express()
app.use(express.static('build'))
app.use(express.json())

const cors = require('cors')

app.use(cors())

let demodata = [
  {
    id: 1,
    story: 'As a user I want to create new user stories',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done'
  },
  {
    id: 2,
    story: 'As a user I want to modify user stories',
    priority: 2,
    date: '2021-06-17T08:32:22.221Z',
    status: 'in progress'
  },
  {
    id: 3,
    story: 'As a user I want to delete user stories',
    priority: 99,
    date: '2021-06-17T08:34:12.091Z',
    status: 'not started'
  },
  {
    id: 4,
    story: 'Testing automatic deployment to heroku...',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done'
  }
]


app.get('/', (req, res) => {
  res.send('<h1>Scrum Tracker app backend</h1>')
})

app.get('/api/userstories', (req, res) => {
  res.json(demodata)
})

const generateId = () => {
  const maxId = demodata.length > 0
    ? Math.max(...demodata.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/userstories', (request, response) => {
  //console.log(request.body)
  const body = request.body

  if (!body.story) {
    return response.status(400).json({ 
      error: 'story is empty' 
    })
  }

  const newStoryObject = {
    id: generateId(),
    story: body.story,
    priority: 9999,
    date: new Date().toISOString(),
    status: 'new'
  }

  demodata = demodata.concat(newStoryObject)

  response.json(newStoryObject)
})


// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})