import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ModifyUserStory = ( { stories, updateUserStory }) => {
  const [story, setStory] = useState('')
  const [newPriority, setNewPriority] = useState('')
  const [newStatus, setNewStatus] = useState('')


  const modifyStory = (event) => {
    event.preventDefault()
    //console.log(stories)
    const storyID = stories.filter(s => s.story.toLowerCase() === story.toLowerCase())
    //console.log(storyID)
    if (storyID[0]) {
      const id = storyID[0].id
      updateUserStory(id, newPriority, newStatus)
    } else {
      updateUserStory(null, newPriority, newStatus)
    }


    setStory('')
    setNewPriority('')
    setNewStatus('')

  }
  return (
    <div className="addUserStoryForm">
      <h2>Modify User Story</h2>
      <Form onSubmit={modifyStory}>
        <Form.Group>
          <Form.Label>User Story to modify</Form.Label>
          <Form.Control
            id='modify-story-input'
            type="text"
            name="userstory"
            value={story}
            placeholder="User Story to modify"
            onChange={({ target }) => setStory(target.value)}
          />
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