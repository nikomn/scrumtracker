const mongoose = require('mongoose')

const userStorySchema = new mongoose.Schema({
  story: String,
  date: Date,
  status: String,
  priority: Number,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ]
})

userStorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('UserStory', userStorySchema)