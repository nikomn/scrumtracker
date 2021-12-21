import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddTask = ({ createNewTask, story }) => {
  const [task, setTask] = useState('')
  const [status, setStatus] = useState('waiting')


  const addTask = (event) => {
    event.preventDefault()
    const newTaskObject = {
      name: task,
      status: status
    }
    createNewTask(newTaskObject, story)
    setTask('')
    setStatus('waiting')

  }
  return (
    <div className="addTaskForm">
      <h2>Add new Task</h2>
      <Form onSubmit={addTask}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id='task-input'
            type="text"
            name="task"
            value={task}
            placeholder="New task"
            onChange={({ target }) => setTask(target.value)}
          />
          <div>Status</div>
          <p>
            <select
              id='task-status-dropdown'
              value={status}
              onChange={({ target }) => setStatus(target.value)}
            >
              <option value='waiting'>waiting</option>
              <option value='doing'>doing</option>
              <option value='done'>done</option>
            </select>
          </p>
          <Button variant="success" type="submit">
            Add new task
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddTask