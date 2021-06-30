import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import AddUserStory from '../components/AddUserStory'

test('product backlog renders', () => {
  const stories = []

  const component = render(
    <AddUserStory stories={stories} setStories={null} />
  )

  expect(component.container).toHaveTextContent(
    'User Story'
  )
})

test('clicking add story button calls event handler once', async () => {
  const mockHandler = jest.fn()

  const stories = []

  const component = render(
    <AddUserStory stories={stories} setStories={mockHandler} />
  )

  const button = component.getByText('Add new story')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('<AddUserStory /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const stories = []

  const component = render(
    <AddUserStory stories={stories} setStories={mockHandler} />
  )

  const input = component.container.querySelector('input')
  const form = component.container.querySelector('form')

  fireEvent.change(input, {
    target: { value: 'testing adding of new user story' }
  })
  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  //console.log(mockHandler.mock.calls[0][0][0])
  expect(mockHandler.mock.calls[0][0][0].story).toBe('testing adding of new user story' )
})