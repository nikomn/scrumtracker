import React, { useState, useEffect } from 'react'
import ProductBacklog from './components/ProductBacklog'
import AddUserStory from './components/AddUserStory'
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

  const createUserStory = (userStoryObject) => {
    storyService
      .create(userStoryObject)
      .then(response => {
        setStories(stories.concat(response.data))
      })

  }

  return (
    <div>
      <h1>Scrum Tracker app</h1>
      <ProductBacklog stories={stories} />
      <AddUserStory createNewStory={createUserStory} />
    </div>
  )
}

export default App