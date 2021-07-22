import React, { useState, useEffect } from 'react'
import ProductBacklog from './components/ProductBacklog'
import SprintBacklogList from './components/SprintBacklogList'
import AddUserStory from './components/AddUserStory'
import ModifyUserStory from './components/ModifyUserStory'
import storyService from './services/userstories'
import backlogService from './services/sprintbacklogs'

import {
  Switch, Route, Link, useRouteMatch
} from 'react-router-dom'
import SprintBacklog from './components/SprintBacklog'
import UserStory from './components/UserStory'

const App = () => {
  const [stories, setStories] = useState([])
  const [backlogs, setBacklogs] = useState([])


  useEffect(() => {
    console.log('use effect!')
    storyService
      .getAll()
      .then(initialStories => {
        setStories(initialStories)
      })
    backlogService
      .getAll()
      .then(initialBacklogs => {
        setBacklogs(initialBacklogs)
      })
  }, [])

  const createUserStory = (userStoryObject) => {
    storyService
      .create(userStoryObject)
      .then(response => {
        setStories(stories.concat(response.data))
      })

  }

  const deleteUserStory = (id) => {
    console.log('Story ' + id + ' will be removed...')
    storyService
      .remove(id)
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        setStories(stories.filter(s => s.id !== id))
      })
  }

  const updateUserStory = (id, newPriority, newStatus) => {
    console.log('id:', id)
    console.log('newPriority:', newPriority)
    console.log('newStatus:', newStatus)
    if (id) {
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
  }

  const createSprintBacklog = (backlogObject) => {
    backlogService
      .create(backlogObject)
      .then(response => {
        setBacklogs(backlogs.concat(response.data))
      })

  }

  const addStoryToSprintBacklog = (storyObject, backlog) => {
    console.log('Story ' + storyObject.story)
    alert('Story ' + storyObject.story + ' added to sprint backlog ' + backlog)
    // backlogService
    //   .addStory(id, storyObject)
    //   .then(response => {
    //     setBacklogs(backlogs.concat(response.data))
    //   })

  }




  const padding = {
    padding: 5
  }

  const match = useRouteMatch('/sprintbacklogs/:id')
  const backlog = match
    ? backlogs.find(b => b.id === match.params.id)
    : null

  console.log(stories)
  const matchStory = useRouteMatch('/userstories/:id')
  console.log(matchStory)
  const userstory = matchStory
    ? stories.find(s => s.id === matchStory.params.id)
    : null

  //console.log(stories)

  return (
    <div className="container">
      <div>
        <Link style={padding} to="/">product backlog</Link>
        <Link style={padding} to="/sprintbacklogs">sprint backlogs</Link>
      </div>

      <Switch>
        <Route path="/sprintbacklogs/:id">
          <SprintBacklog
            backlog={backlog}
            backlogs={backlogs}
            addStoryToSprintBacklog={addStoryToSprintBacklog}
          />
        </Route>
        <Route path="/userstories/:id">
          <UserStory
            userstory={userstory}
            backlogs={backlogs}
            addStoryToSprintBacklog={addStoryToSprintBacklog}
          />
        </Route>
        <Route path="/sprintbacklogs">
          <SprintBacklogList
            backlogs={backlogs}
            createSprintBacklog={createSprintBacklog} />
        </Route>
        <Route path="/">
          <ProductBacklog
            stories={stories}
            deleteUserStory={deleteUserStory}
            backlogs={backlogs}
            addStoryToSprintBacklog={addStoryToSprintBacklog} />
          <AddUserStory createNewStory={createUserStory} />
          <ModifyUserStory stories={stories} updateUserStory={updateUserStory} />
        </Route>
      </Switch>
    </div>
  )
}

export default App