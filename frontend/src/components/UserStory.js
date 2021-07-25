import React from 'react'
// import React, { useState } from 'react'
import AddStoryToBacklog from './AddStoryToBacklog'

const UserStory = ({ userstory, backlogs, addStoryToSprintBacklog }) => {
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
      <p>
        <b>User Story:</b> {userstory.story} <br />
        <b>Priority:</b> {userstory.priority} <br />
        <b>Status:</b> {userstory.status}
      </p>
      {/* <select
        value={sprintBacklog}
        onChange={addToBacklog}
      >
        {backlogs.map(b =>
          <option value={b.name} key={b.id}>{b.name}</option>
        )}
      </select> */}
      <AddStoryToBacklog
        userstory={userstory}
        backlogs={backlogs}
        addStoryToSprintBacklog={addStoryToSprintBacklog}
      />
    </div>
  )
}

export default UserStory