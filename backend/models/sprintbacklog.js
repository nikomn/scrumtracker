const mongoose = require('mongoose')

const sprintBacklogSchema = new mongoose.Schema({
  name: String,
  userstories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserStory',
    },
  ]
})

sprintBacklogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('SprintBacklog', sprintBacklogSchema)