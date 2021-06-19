const http = require('http')

let demodata = [
  {
    id: 1,
    story: "As a user I want to create new user stories",
    priority: 1,
    date: "2021-06-17T08:30:31.123Z",
    status: "done"
  },
  {
    id: 2,
    story: "As a user I want to modify user stories",
    priority: 2,
    date: "2021-06-17T08:32:22.221Z",
    status: "in progress"
  },
  {
    id: 3,
    story: "As a user I want to delete user stories",
    priority: 99,
    date: "2021-06-17T08:34:12.091Z",
    status: "not started"
  },
  {
    id: 4,
    story: "Testing automatic deployment to heroku...",
    priority: 1,
    date: "2021-06-17T08:30:31.123Z",
    status: "done"
  }
]


const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(demodata))
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})