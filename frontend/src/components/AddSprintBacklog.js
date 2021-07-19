import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddSprintBacklog = ({ createNewBacklog }) => {
  const [backlog, setBacklog] = useState('')

  const addBacklog = (event) => {
    event.preventDefault()
    // console.log(story)
    const newBacklogObject = {
      name: backlog,
    }
    createNewBacklog(newBacklogObject)
    setBacklog('')

  }
  return (
    <div className="createNewBacklog">
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

          <Button variant="success" type="submit">
            Add new story
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddSprintBacklog