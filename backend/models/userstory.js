const mongoose = require('mongoose')

const userStorySchema = new mongoose.Schema({
  story: String,
  type: String,
  date: Date,
  status: {
    type: String,
    enum: {
      values: ['new', 'planned', 'done'],
      message: '{VALUE} is not valid value for status'
    },
  },
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