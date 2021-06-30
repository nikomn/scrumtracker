import React, { useState, useEffect } from 'react'
import ProductBacklog from './components/ProductBacklog'
import UserStoryForm from './components/UserStoryForm'
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
      <ProductBacklog stories={stories} />
      <UserStoryForm stories={stories} setStories={setStories} />
    </div>
  )
}

export default App