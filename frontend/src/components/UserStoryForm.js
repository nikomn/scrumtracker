import React, { useState } from 'react'

const UserStoryForm = ({ stories, setStories }) => {
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