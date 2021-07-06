import React, { useState } from 'react'

const AddUserStory = ({ createNewStory }) => {
  const [story, setStory] = useState('')
  const [priority, setPriority] = useState(99)
  const [status, setStatus] = useState('new')


  const addStory = (event) => {
    event.preventDefault()
    // console.log(story)
    const newStoryObject = {
      story: story,
      priority: priority,
      status: status
    }
    createNewStory(newStoryObject)
    setStory('')
    setPriority(99)
    setStatus('new')

  }
  return (
    <div className="addUserStoryForm">
      <form onSubmit={addStory}>
        <label>
            User Story
        </label>
        <input id='story-input'
          type='text'
          value={story}
          onChange={({ target }) => setStory(target.value)}
        />
        <div>
          <label>
            Priority
          </label>
          <input id='priority-input'
            type='number'
            value={priority}
            onChange={({ target }) => setPriority(target.value)}
          />
        </div>
        <div>
          <label>
            Status
          </label>
          <input id='status-input'
            type='text'
            value={status}
            onChange={({ target }) => setStatus(target.value)}
          />
        </div>

        <button type='submit'>Add new story</button>
      </form>
    </div>
  )
}
export default AddUserStory