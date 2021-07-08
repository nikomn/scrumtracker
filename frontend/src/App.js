import React, { useState, useEffect } from 'react'
import ProductBacklog from './components/ProductBacklog'
import AddUserStory from './components/AddUserStory'
import ModifyUserStory from './components/ModifyUserStory'
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

  const updateUserStory = async (id, updatedData) => {
    const x = typeof id
    console.log(x)
    const testi = stories[3].id
    const y = typeof testi
    console.log(y)
    await storyService
      .update(id, updatedData)
      .then(returnedStory => {
        setStories(stories.map(s => s.id !== id ? s : returnedStory))
      })
    stories.forEach(element => {
      console.log('id', element.id)
    })
  }

  return (
    <div>
      <h1>Scrum Tracker app</h1>
      <ProductBacklog stories={stories} />
      <AddUserStory createNewStory={createUserStory} />
      <ModifyUserStory stories={stories} updateUserStory={updateUserStory} />
    </div>
  )
}

export default App