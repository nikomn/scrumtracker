import React, { useState } from 'react'

const AddStoryToBacklog = ({ userstory, backlogs, addStoryToSprintBacklog }) => {
  const [sprintBacklog, setSprintBacklog] = useState('')

  const addToBacklog = (event) => {
    event.preventDefault()
    // console.log(story)
    addStoryToSprintBacklog(userstory, sprintBacklog)
    setSprintBacklog('')

  }
  return (
    <div className="addToSprintBacklog">
      <h5>Add story to Sprint backlog</h5>
      <form onSubmit={addToBacklog}>
        <select
          id='backlog-dropdown'
          value={sprintBacklog}
          onChange={({ target }) => setSprintBacklog(target.value)}
        >
          <option value='select sprint backlog'>select sprint backlog</option>
          {backlogs.map(b =>
            <option value={b.id} key={b.id}>{b.name}</option>
          )}
        </select>
        <div>
          <button type="submit" id='add-to-backlog-button' >Add to sprintbacklog</button>
        </div>
      </form>

    </div>
  )
}
export default AddStoryToBacklog