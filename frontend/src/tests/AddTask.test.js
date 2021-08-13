import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import AddTask from '../components/AddTask'

test('<AddTask /> renders', () => {

  const story = {
    id: 1,
    story: 'Testing with Jest',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done',
    tasks: []
  }

  const component = render(
    <AddTask
      createNewTask={null}
      story={story.id} />
  )

  expect(component.container).toHaveTextContent(
    'Add new Task'
  )
})


test('<AddTask /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const story = {
    id: 1,
    story: 'Testing with Jest',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done',
    tasks: []
  }

  const component = render(
    <AddTask
      createNewTask={mockHandler}
      story={story.id} />
  )

  const taskinput = component.container.querySelector('#task-input')
  //const taskstatusinput = component.container.querySelector('#task-status-input')
  const taskstatusdropdown = component.container.querySelector('#task-status-dropdown')
  const form = component.container.querySelector('form')

  fireEvent.change(taskinput, {
    target: { value: 'testing adding of new task' }
  })
  fireEvent.change(taskstatusdropdown, {
    target: { value: 'doing' }
  })

  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler.mock.calls[0][0].name).toBe('testing adding of new task')
  expect(mockHandler.mock.calls[0][0].status).toBe('doing')
})

