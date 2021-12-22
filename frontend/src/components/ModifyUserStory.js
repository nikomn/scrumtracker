import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ModifyUserStory = ( { story, updateUserStory }) => {
  const [newPriority, setNewPriority] = useState(story.priority)
  const [newStatus, setNewStatus] = useState(story.status)
  const [newStorypoints, setNewStorypoints] = useState(story.storypoints)


  const modifyStory = (event) => {
    event.preventDefault()
    updateUserStory(story.id, newPriority, newStatus, newStorypoints)
    setNewPriority('')
    setNewStorypoints(0)

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
          <Form.Label>New storypoints</Form.Label>
          <Form.Control
            id='modify-storypoint-input'
            type="number"
            name="storypoints"
            value={newStorypoints}
            placeholder="New storypoints"
            onChange={({ target }) => setNewStorypoints(target.value)}
          />
          <div>New Status</div>
          {story.type === 'story' ? (
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

          ) : (
            <p>
              <select
                id='modify-status-dropdown'
                value={newStatus}
                onChange={({ target }) => setNewStatus(target.value)}
              >
                <option value='waiting'>waiting</option>
                <option value='doing'>doing</option>
                <option value='done'>done</option>
              </select>
            </p>

          )}

          <Button variant="success" type="submit" id='modify-story-button' >
          Update story
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default ModifyUserStory