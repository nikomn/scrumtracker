import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddUserStory = ({ createNewStory }) => {
  const [story, setStory] = useState('')
  const [priority, setPriority] = useState(99)
  const [status, setStatus] = useState('new')


  const addStory = (event) => {
    event.preventDefault()
    // console.log(story)
    const newStoryObject = {
      story: story,
      priority: priority,
      status: status
    }
    createNewStory(newStoryObject)
    setStory('')
    setPriority(99)
    setStatus('new')

  }
  return (
    <div className="addUserStoryForm">
      <h2>Add new User Story</h2>
      <Form onSubmit={addStory}>
        <Form.Group>
          <Form.Label>User Story</Form.Label>
          <Form.Control
            id='story-input'
            type="text"
            name="userstory"
            value={story}
            onChange={({ target }) => setStory(target.value)}
          />
          <Form.Label>Priority</Form.Label>
          <Form.Control
            id='priority-input'
            type="number"
            name="priority"
            value={priority}
            onChange={({ target }) => setPriority(target.value)}
          />
          <Form.Label>Status</Form.Label>
          <Form.Control
            id='status-input'
            type="text"
            name="status"
            value={status}
            onChange={({ target }) => setStatus(target.value)}
          />
          <Button variant="primary" type="submit">
            Add new story
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddUserStory