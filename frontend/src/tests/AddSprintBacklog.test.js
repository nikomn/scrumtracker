import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import AddSprintBacklog from '../components/AddSprintBacklog'

test('<AddSprintBacklog /> renders', () => {
  const component = render(
    <AddSprintBacklog createSprintBacklog={null} />
  )

  expect(component.container).toHaveTextContent(
    'Add new Sprint backlog'
  )
})

test('<AddSprintBacklog /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const component = render(
    <AddSprintBacklog createSprintBacklog={mockHandler} />
  )

  const backloginput = component.container.querySelector('#backlog-input')
  const form = component.container.querySelector('form')

  fireEvent.change(backloginput, {
    target: { value: 'testing adding of new sprint backlog' }
  })

  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler.mock.calls[0][0].name).toBe('testing adding of new sprint backlog' )
})

