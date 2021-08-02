import React from 'react'
// import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import AddStoryToBacklog from './AddStoryToBacklog'
import ModifyUserStory from './ModifyUserStory'
import Task from './Task'

const UserStory = ({ userstory, backlogs, addStoryToSprintBacklog, updateUserStory, storyView }) => {
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
        </div>
      ) : (
        <div>
          <p>
            <b>User Story:</b> {userstory.story} <br />
            <b>Priority:</b> {userstory.priority} <br />
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