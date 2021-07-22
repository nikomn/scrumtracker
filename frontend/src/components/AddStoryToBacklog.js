import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

const AddStoryToBacklog = ({ userstory, backlogs, addStoryToSprintBacklog }) => {
  const [sprintBacklog, setSprintBacklog] = useState('')

  const addToBacklog = (event) => {
    event.preventDefault()
    // console.log(story)
    addStoryToSprintBacklog(userstory)
    setSprintBacklog('')

  }
  return (
    <div className="addToSprintBacklog">
      <h2>Add story to Sprint backlog</h2>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          value={sprintBacklog}
          onChange={addToBacklog}
        >
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {backlogs.map(b =>
            <Dropdown.Item value={b.name} key={b.id}>{b.name}</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>


    </div>
  )
}
export default AddStoryToBacklog