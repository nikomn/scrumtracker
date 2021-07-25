import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ModifyUserStory = ( { story, updateUserStory }) => {
  const [newPriority, setNewPriority] = useState('')
  const [newStatus, setNewStatus] = useState('')


  const modifyStory = (event) => {
    event.preventDefault()
    updateUserStory(story.id, newPriority, newStatus)
    setNewPriority('')
    setNewStatus('')

  }
  return (
    <div className="addUserStoryForm">
      <h2>Modify User Story</h2>
      <Form onSubmit={modifyStory}>
        <Form.Group>
          <Form.Label>New priority</Form.Label>
          <Form.Control
            id='modify-priority-input'
            type="number"
            name="priority"
            value={newPriority}
            placeholder="New priority"
            onChange={({ target }) => setNewPriority(target.value)}
          />
          <Form.Label>New Status</Form.Label>
          <Form.Control
            id='modify-status-input'
            type="text"
            name="status"
            value={newStatus}
            placeholder="New Status"
            onChange={({ target }) => setNewStatus(target.value)}
          />
          <Button variant="success" type="submit">
          Update story
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default ModifyUserStory