import React, { useState, useEffect } from 'react'
import UserStory from './components/UserStory'
import storyService from './services/userstories'


const App = () => {
  const [stories, setStories] = useState([])


  useEffect(() => {
    storyService
      .getAll()
      .then(initialStories => {
        setStories(initialStories)
      })
  }, [])

  return (
    <div>
      <h1>Scrum Tracker app</h1>
      <p>This is Scrum Tracker app</p>
      <ul>
        {stories.map(story =>
          <li key={story.id}>
            <UserStory userstory={story} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default App