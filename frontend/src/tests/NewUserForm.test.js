import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import NewUserForm from '../components/NewUserForm'

test('<NewUserForm /> renders', () => {

  const component = render(
    <NewUserForm createUser={null} />
  )

  expect(component.container).toHaveTextContent(
    'Create new user'
  )
})

test('<NewUserForm /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const component = render(
    <NewUserForm createUser={mockHandler} />
  )

  const nameinput = component.container.querySelector('#username-input')
  const passwordinput = component.container.querySelector('#password-input')
  const form = component.container.querySelector('form')

  fireEvent.change(nameinput, {
    target: { value: 'newusername' }
  })

  fireEvent.change(passwordinput, {
    target: { value: 'newpassword' }
  })

  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler.mock.calls[0][0]).toBe('newusername')
  expect(mockHandler.mock.calls[0][1]).toBe('newpassword')
})

