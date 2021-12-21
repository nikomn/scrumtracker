import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import LoginForm from '../components/loginForm'

test('<LoginForm /> renders', () => {

  const component = render(
    <LoginForm handleLogin={null} />
  )

  expect(component.container).toHaveTextContent(
    'Login'
  )
})


