import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddTask = ({ createNewTask, story }) => {
  const [task, setTask] = useState('')
  const [status, setStatus] = useState('new')


  const addTask = async (event) => {
    event.preventDefault()
    const newTaskObject = {
      name: task,
      status: status
    }
    await createNewTask(newTaskObject, story)
    window.location.reload()
    //alert('Task "' + newTaskObject.name + '" added to story ' + story)
    setTask('')
    setStatus('new')

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
          <Form.Label>Status</Form.Label>
          <Form.Control
            id='task-status-input'
            type="text"
            name="status"
            value={status}
            placeholder="Status"
            onChange={({ target }) => setStatus(target.value)}
          />
          <Button variant="success" type="submit">
            Add new task
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddTask