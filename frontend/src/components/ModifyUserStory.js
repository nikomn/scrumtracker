import React, { useState } from 'react'

const ModifyUserStory = ( { stories, updateUserStory }) => {
  const [story, setStory] = useState('')
  const [newPriority, setNewPriority] = useState('')
  const [newStatus, setNewStatus] = useState('')


  const modifyStory = (event) => {
    event.preventDefault()
    const storyID = stories.filter(s => s.story.toLowerCase() === story.toLowerCase())
    console.log(storyID)
    if (storyID[0]) {
      const id = storyID[0].id
      updateUserStory(id, newPriority, newStatus)
    }


    setStory('')
    setNewPriority('')
    setNewStatus('')

  }
  return (
    <div className="addUserStoryForm">
      <h2>Modify User Story</h2>
      <form onSubmit={modifyStory}>
        <label>
            User Story to modify
        </label>
        <input id='story-input'
          type='text'
          value={story}
          onChange={({ target }) => setStory(target.value)}
        />
        <div>
          <label>
            New priority
          </label>
          <input id='priority-input'
            type='number'
            value={newPriority}
            onChange={({ target }) => setNewPriority(target.value)}
          />
        </div>
        <div>
          <label>
            New Status
          </label>
          <input id='status-input'
            type='text'
            value={newStatus}
            onChange={({ target }) => setNewStatus(target.value)}
          />
        </div>

        <button type='submit'>Update story</button>
      </form>
    </div>
  )
}
export default ModifyUserStory