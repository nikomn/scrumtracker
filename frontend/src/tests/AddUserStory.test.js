import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import AddUserStory from '../components/AddUserStory'

test('<AddUserStory /> renders', () => {
  const stories = []

  const component = render(
    <AddUserStory stories={stories} setStories={null} />
  )

  expect(component.container).toHaveTextContent(
    'Add new User Story'
  )
})

test('clicking add story button calls event handler once', async () => {
  const mockHandler = jest.fn()

  const component = render(
    <AddUserStory createNewStory={mockHandler} />
  )

  const button = component.getByText('Add new story')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('<AddUserStory /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const component = render(
    <AddUserStory createNewStory={mockHandler} />
  )

  const storyinput = component.container.querySelector('#story-input')
  const priorityinput = component.container.querySelector('#priority-input')
  const storypointinput = component.container.querySelector('#storypoint-input')
  //const statusinput = component.container.querySelector('#status-input')
  const statusdropdown = component.container.querySelector('#status-dropdown')
  const form = component.container.querySelector('form')

  fireEvent.change(storyinput, {
    target: { value: 'testing adding of new user story' }
  })
  fireEvent.change(priorityinput, {
    target: { value: 123 }
  })
  fireEvent.change(storypointinput, {
    target: { value: 987 }
  })
  fireEvent.change(statusdropdown, {
    target: { value: 'done' }
  })


  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  //console.log(mockHandler.mock.calls[0][0])
  //console.log(mockHandler.mock.calls[0])
  expect(mockHandler.mock.calls[0][0].story).toBe('testing adding of new user story' )
  expect(mockHandler.mock.calls[0][0].priority).toBe('123')
  expect(mockHandler.mock.calls[0][0].storypoints).toBe('987')
  expect(mockHandler.mock.calls[0][0].status).toBe('done')
})