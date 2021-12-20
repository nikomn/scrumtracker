import React, { useState, useEffect } from 'react'
import ProductBacklog from './components/ProductBacklog'
import SprintBacklogList from './components/SprintBacklogList'
import AddUserStory from './components/AddUserStory'
import LoginForm from './components/loginForm'
//import ModifyUserStory from './components/ModifyUserStory'
import storyService from './services/userstories'
import backlogService from './services/sprintbacklogs'
import loginService from './services/login'

import {
  Switch, Route, Link, useRouteMatch
} from 'react-router-dom'
import SprintBacklog from './components/SprintBacklog'
import UserStory from './components/UserStory'

const App = () => {
  const [stories, setStories] = useState([])
  const [backlogs, setBacklogs] = useState([])
  const [user, setUser] = useState(null)


  useEffect(() => {
    //console.log('use effect!')
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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedScrumtrackerappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      storyService.setToken(user.token)
      backlogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (username, password) => {
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedScrumtrackerappUser', JSON.stringify(user)
      )
      setUser(user)
      storyService.setToken(user.token)
      backlogService.setToken(user.token)
    } catch (exception) {
      alert('wrong credentials')
    }
  }

  const createUserStory = async (userStoryObject) => {
    await storyService
      .create(userStoryObject)
      .then(response => {
        setStories(stories.concat(response.data))
      })

  }

  const createMaintenanceStory = async (userStoryObject, backlog) => {
    await storyService
      .create(userStoryObject)
      .then(response => {
        setStories(stories.concat(response.data))
        addStoryToSprintBacklog(response.data, backlog.id)
      })

  }

  const deleteUserStory = (id) => {
    //console.log('Story ' + id + ' will be removed...')
    storyService
      .remove(id)
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        setStories(stories.filter(s => s.id !== id))
      })
  }

  const updateUserStory = (id, newPriority, newStatus, newStorypoints) => {
    // console.log('id:', id)
    // console.log('newPriority:', newPriority)
    // console.log('newStatus:', newStatus)
    if (id) {
      const story = stories.find(s => s.id === id)
      //let changedStory = { ...story }
      let newData = {
        priority: story.priority,
        storypoints: story.storypoints,
        status: story.status
      }
      if (newData.priority !== newPriority) {
        newData = { ...newData, priority: newPriority }
      }
      if (newData.storypoints !== newStorypoints) {
        newData = { ...newData, storypoints: newStorypoints }
      }
      if (newData.status !== newStatus) {
        newData = { ...newData, status: newStatus }
      }

      storyService
        .update(id, newData)
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

  const addStoryToSprintBacklog = async (storyObject, backlog) => {
    console.log(storyObject)
    if (backlog !== '') {
      const backlogToAdd = backlogs.find(b => b.id === backlog)
      console.log(backlogToAdd)
      if (!backlogToAdd.userstories.find(s => s.id === storyObject.id)) {
        await backlogService
          .addStory(backlog, storyObject)
          .then(response => {
            //console.log(response)
            //console.log(backlogs)
            setBacklogs(backlogs.map(b => b.id !== backlog ? b : response))
          })
        alert('Story "' + storyObject.story + '" added to sprint backlog ' + backlogToAdd.name)

      } else {
        alert('Story "' + storyObject.story + '" already in sprint backlog ' + backlogToAdd.name)
      }

    } else {
      alert('Select backlog from the dropdown menu')
    }

  }

  const addTaskToStory = async (taskObject, story) => {
    const storyToAdd = stories.find(st => st.id === story)

    await storyService
      .addTask(story, taskObject)
      .then(response => {
        setStories(stories.map(s => s.id !== story ? s : response))
      })
    alert('Task "' + taskObject.name + '" added to story ' + storyToAdd.story)

  }

  const addCommentToStory = async (commentObject, story) => {
    const storyToAdd = stories.find(st => st.id === story)

    await storyService
      .addComment(story, commentObject)
      .then(response => {
        setStories(stories.map(s => s.id !== story ? s : response))
      })
    alert('Comment "' + commentObject.commentText + '" added to story ' + storyToAdd.story)

  }




  const padding = {
    padding: 5
  }

  const match = useRouteMatch('/sprintbacklogs/:id')
  const backlog = match
    ? backlogs.find(b => b.id === match.params.id)
    : null

  //console.log(stories)
  const matchStory = useRouteMatch('/userstories/:id')
  //console.log(matchStory)
  const userstory = matchStory
    ? stories.find(s => s.id === matchStory.params.id)
    : null

  //console.log(stories)

  if (user === null) {
    return (
      <LoginForm handleLogin={handleLogin}/>
    )
  } else {

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
              deleteUserStory={deleteUserStory}
              createMaintenanceStory={createMaintenanceStory}
            />
          </Route>
          <Route path="/userstories/:id">
            <UserStory
              userstory={userstory}
              backlogs={backlogs}
              addStoryToSprintBacklog={addStoryToSprintBacklog}
              updateUserStory={updateUserStory}
              storyView={''}
              addTaskToStory={addTaskToStory}
              addCommentToStory={addCommentToStory}
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
            {/* <ModifyUserStory stories={stories} updateUserStory={updateUserStory} /> */}
          </Route>
        </Switch>
      </div>
    )

  }
}

export default App