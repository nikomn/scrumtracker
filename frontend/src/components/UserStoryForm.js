import React, { useState } from 'react'

const UserStoryForm = () => {
  const [story, setStory] = useState('')


  const addStory = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }
  return (
    <div>
      <form onSubmit={addStory}>
        <label>
            User Story
          <input
            type='text'
            value={story}
            onChange={({ target }) => setStory(target.value)}
          />
        </label>
        <button type='submit'>Add new story</button>
      </form>
    </div>
  )
}
export default UserStoryForm