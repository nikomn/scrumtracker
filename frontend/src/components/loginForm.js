import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const login = (event) => {
    event.preventDefault()
    alert('logging in...')
    handleLogin(username, password)
    setUsername('')
    setPassword('')

  }
  return (
    <div className="addTaskForm">
      <h2>Login</h2>
      <Form onSubmit={login}>
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
            name="pasword"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button variant="success" type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default Login