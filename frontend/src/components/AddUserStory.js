import React, { useState } from 'react'

const AddUserStory = ({ createNewStory }) => {
  const [story, setStory] = useState('')


  const addStory = (event) => {
    event.preventDefault()
    // console.log(story)
    const newStoryObject = {
      story: story,
    }
    createNewStory(newStoryObject)
    setStory('')

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

        <button type='submit'>Add new story</button>
      </form>
    </div>
  )
}
export default AddUserStory