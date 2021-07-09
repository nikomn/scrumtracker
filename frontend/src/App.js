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

  const updateUserStory = (id, newPriority, newStatus) => {
    console.log('id:', id)
    console.log('newPriority:', newPriority)
    console.log('newStatus:', newStatus)
    //const storyID = stories.filter(s => s.story.toLowerCase() === story.toLowerCase())
    //console.log(storyID)
    //const id = storyID[0].id
    const story = stories.find(s => s.id === id)
    let changedStory = { ...story }
    //let changedStory = { ...story, status: newStatus, priority: newPriority }
    // console.log(story)
    // let modifiedData = null
    if (newPriority === '' && newStatus === '') {
      console.log('No changes made!')
    }
    if (newPriority !== '' && newStatus === '') {
      console.log('Changing priority')
      changedStory = { ...story, priority: newPriority }
    }
    if (newPriority === '' && newStatus !== '') {
      console.log('Changing status')
      changedStory = { ...story, status: newStatus }
    }
    if (newPriority !== '' && newStatus !== '') {
      console.log('Changing priority and status')
      changedStory = { ...story, status: newStatus, priority: newPriority }
    }

    storyService
      .update(id, changedStory)
      .then(returnedStory => {
        console.log(returnedStory)
        setStories(stories.map(s => s.id !== id ? s : returnedStory))
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