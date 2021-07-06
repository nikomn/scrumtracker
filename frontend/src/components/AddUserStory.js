import React, { useState } from 'react'

const AddUserStory = ({ createNewStory }) => {
  const [story, setStory] = useState('')
  const [priority, setPriority] = useState(99)


  const addStory = (event) => {
    event.preventDefault()
    // console.log(story)
    const newStoryObject = {
      story: story,
      priority: priority
    }
    createNewStory(newStoryObject)
    setStory('')
    setPriority(99)

  }
  return (
    <div className="addUserStoryForm">
      <form onSubmit={addStory}>
        <label>
            User Story
        </label>
        <input
          type='text'
          value={story}
          onChange={({ target }) => setStory(target.value)}
        />
        <div>
          <label>
            Priority
          </label>
          <input
            type='number'
            value={priority}
            onChange={({ target }) => setPriority(target.value)}
          />
        </div>

        <button type='submit'>Add new story</button>
      </form>
    </div>
  )
}
export default AddUserStory