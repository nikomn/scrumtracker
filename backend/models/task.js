const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: String,
  date: Date,
  status: {
    type: String,
    enum: {
      values: ['waiting', 'doing', 'done'],
      message: '{VALUE} is not valid value for status'
    },
  }
})

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Task', taskSchema)