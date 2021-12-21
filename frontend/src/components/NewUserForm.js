import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const NewUser = ({ createUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const createNewUser = (event) => {
    event.preventDefault()
    //alert('logging in...')
    createUser(username, password)
    setUsername('')
    setPassword('')

  }
  return (
    <div className="newUserForm">
      <h1>Wellcome to Scrum Tracker App</h1>
      <h2>Create new user</h2>
      <Form onSubmit={createNewUser}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            id='username-input'
            type="text"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            id='password-input'
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button variant="success" type="submit">
            Create account
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default NewUser