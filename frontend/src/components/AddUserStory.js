import React, { useState } from 'react'

const AddUserStory = ({ stories, setStories }) => {
  const [story, setStory] = useState('')

  const generateId = () => {
    const maxId = stories.length > 0
      ? Math.max(...stories.map(n => n.id))
      : 0
    return maxId + 1
  }


  const addStory = (event) => {
    event.preventDefault()
    // console.log(story)
    const newStoryObject = {
      id: generateId(),
      story: story,
      priority: 9999,
      date: new Date().toISOString(),
      status: 'new'
    }
    setStories(stories.concat(newStoryObject))
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