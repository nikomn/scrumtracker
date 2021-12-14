import React from 'react'
// import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import AddStoryToBacklog from './AddStoryToBacklog'
import ModifyUserStory from './ModifyUserStory'
import Task from './Task'
import AddTask from './AddTask'
import Comment from './Comment'
import AddComment from './AddComment'

const UserStory = (
  {
    userstory,
    backlogs,
    addStoryToSprintBacklog,
    updateUserStory,
    storyView,
    addTaskToStory,
    addCommentToStory
  }) => {
  // const [sprintBacklog, setSprintBacklog] = useState('')

  // const addToBacklog = (event) => {
  //   event.preventDefault()
  //   // console.log(story)
  //   addStoryToSprintBacklog(userstory)
  //   setSprintBacklog('')

  // }

  if (!userstory) {
    return null
  }
  return (
    <div className='userstory'>
      {storyView !== null ? (
        <div>
          <h1>{userstory.story}</h1>
          <p>
            <b>User Story:</b> {userstory.story} <br />
            <b>Priority:</b> {userstory.priority} <br />
            <b>Storypoints:</b> {userstory.storypoints} <br />
            <b>Status:</b> {userstory.status}
          </p>
          <ModifyUserStory story={userstory} updateUserStory={updateUserStory} />
          <h2>Technical tasks</h2>
          <Table striped hover>
            <tbody>
              {userstory.tasks.map(task =>
                <tr key={task.id}>
                  <td>
                    <Task task={task} />
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <AddTask createNewTask={addTaskToStory} story={userstory.id} />
          <h2>Comments</h2>
          <Table striped hover>
            <tbody>
              {userstory.comments.map(comment =>
                <tr key={comment.id}>
                  <td>
                    <Comment comment={comment} />
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <AddComment createNewComment={addCommentToStory} story={userstory.id} />
        </div>
      ) : (
        <div>
          <p>
            <b>User Story:</b> {userstory.story} <br />
            <b>Priority:</b> {userstory.priority} <br />
            <b>Storypoints:</b> {userstory.storypoints} <br />
            <b>Status:</b> {userstory.status}
          </p>
          <AddStoryToBacklog
            userstory={userstory}
            backlogs={backlogs}
            addStoryToSprintBacklog={addStoryToSprintBacklog}
          />
        </div>
      )}
    </div>
  )
}

export default UserStory