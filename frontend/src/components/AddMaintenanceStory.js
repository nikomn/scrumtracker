import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddMaintenanceStory = ({ backlog, createMaintenanceStory }) => {
  const [story, setStory] = useState('')
  const [priority, setPriority] = useState(99)
  const [status, setStatus] = useState('new')


  const addStory = async (event) => {
    event.preventDefault()
    // console.log(story)
    const newStoryObject = {
      story: story,
      priority: priority,
      storypoints: 0,
      status: status,
      type: 'other'
    }
    createMaintenanceStory(newStoryObject, backlog)

    setStory('')
    setPriority(99)
    setStatus('new')

  }
  return (
    <div className="addUserStoryForm">
      <h2>Add maintenance story</h2>
      <Form onSubmit={addStory}>
        <Form.Group>
          <Form.Label>User Story</Form.Label>
          <Form.Control
            id='story-input'
            type="text"
            name="userstory"
            value={story}
            placeholder="New user story"
            onChange={({ target }) => setStory(target.value)}
          />
          <Form.Label>Priority</Form.Label>
          <Form.Control
            id='priority-input'
            type="number"
            name="priority"
            value={priority}
            placeholder="Priority"
            onChange={({ target }) => setPriority(target.value)}
          />
          <div>Status</div>
          <p>
            <select
              id='status-dropdown'
              value={status}
              onChange={({ target }) => setStatus(target.value)}
            >
              <option value='new'>new</option>
              <option value='planned'>planned</option>
              <option value='done'>done</option>
            </select>
          </p>
          <Button variant="success" type="submit">
            Add new story
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddMaintenanceStory