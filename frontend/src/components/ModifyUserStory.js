import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ModifyUserStory = ( { story, updateUserStory }) => {
  const [newPriority, setNewPriority] = useState('')
  const [newStatus, setNewStatus] = useState(story.status)


  const modifyStory = (event) => {
    event.preventDefault()
    updateUserStory(story.id, newPriority, newStatus)
    setNewPriority('')

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
          <div>New Status</div>
          <p>
            <select
              id='modify-status-dropdown'
              value={newStatus}
              onChange={({ target }) => setNewStatus(target.value)}
            >
              <option value='new'>new</option>
              <option value='planned'>planned</option>
              <option value='done'>done</option>
            </select>
          </p>
          <Button variant="success" type="submit">
          Update story
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default ModifyUserStory