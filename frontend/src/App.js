import React, { useState, useEffect } from 'react'
import ProductBacklog from './components/ProductBacklog'
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
    </div>
  )
}

export default App