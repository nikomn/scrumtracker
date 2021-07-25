import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import ModifyUserStory from '../components/ModifyUserStory'

test('<ModifyUserStory /> form renders', () => {
  const stories = []

  const component = render(
    <ModifyUserStory stories={stories} updateUserStory={null} />
  )

  expect(component.container).toHaveTextContent(
    'Modify User Story'
  )
})

test('clicking update story button calls event handler once', async () => {
  const mockHandler = jest.fn()

  const storyObject = {
    id: 1,
    story: 'As a user I want to delete user stories',
    priority: 99,
    status: 'not started'
  }

  const component = render(
    <ModifyUserStory story={storyObject} updateUserStory={mockHandler} />
  )

  //component.debug()
  const button = component.getByText('Update story')

  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('<ModifyUserStory /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const storyObject = {
    id: 1,
    story: 'As a user I want to delete user stories',
    priority: 99,
    status: 'not started'
  }

  const component = render(
    <ModifyUserStory story={storyObject} updateUserStory={mockHandler} />
  )

  //component.debug()

  const priorityinput = component.container.querySelector('#modify-priority-input')
  const statusinput = component.container.querySelector('#modify-status-input')
  //console.log(statusinput)
  const form = component.container.querySelector('form')

  fireEvent.change(priorityinput, {
    target: { value: 123 }
  })
  fireEvent.change(statusinput, {
    target: { value: 'modified' }
  })


  fireEvent.submit(form)

  //console.log(mockHandler.mock.calls[0])
  expect(mockHandler.mock.calls).toHaveLength(1)

  expect(mockHandler.mock.calls[0][0]).toBe(1)
  expect(mockHandler.mock.calls[0][1]).toBe('123')
  expect(mockHandler.mock.calls[0][2]).toBe('modified')
})