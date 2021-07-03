const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.08swj.mongodb.net/scrumtracker-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const userStorySchema = new mongoose.Schema({
  story: String,
  date: Date,
  status: String,
  priority: Number
})

const UserStory = mongoose.model('UserStory', userStorySchema)

const userStory = new UserStory({
  story: 'As a user I want to store my user stories in to mongodb',
  date: new Date(),
  status: 'new',
  priority: 9999
})

userStory.save().then(response => {
  console.log('user story saved!')
  mongoose.connection.close()
})