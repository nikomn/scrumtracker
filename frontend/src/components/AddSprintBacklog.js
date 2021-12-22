import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddSprintBacklog = ({ createSprintBacklog }) => {
  const [backlog, setBacklog] = useState('')

  const addBacklog = (event) => {
    event.preventDefault()
    // console.log(story)
    const newBacklogObject = {
      name: backlog,
    }
    createSprintBacklog(newBacklogObject)
    setBacklog('')

  }
  return (
    <div className="createSprintBacklog">
      <h2>Add new Sprint backlog</h2>
      <Form onSubmit={addBacklog}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id='backlog-input'
            type="text"
            name="backlog"
            value={backlog}
            placeholder="New Sprint backlog"
            onChange={({ target }) => setBacklog(target.value)}
          />

          <Button variant="success" type="submit" id='backlog-button' >
          Create
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddSprintBacklog