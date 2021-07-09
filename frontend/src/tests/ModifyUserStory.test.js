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
  const stories = []

  const component = render(
    <ModifyUserStory stories={stories} updateUserStory={mockHandler} />
  )

  //component.debug()
  const button = component.getByText('Update story')

  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('<ModifyUserStory /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const stories = [
    {
      story: 'As a user I want to create new user stories',
      priority: 1,
      status: 'done'
    },
    {
      story: 'As a user I want to modify user stories',
      priority: 2,
      status: 'in progress'
    },
    {
      story: 'As a user I want to delete user stories',
      priority: 99,
      status: 'not started'
    },
  ]

  const component = render(
    <ModifyUserStory stories={stories} updateUserStory={mockHandler} />
  )

  const storyinput = component.container.querySelector('#modify-story-input')
  const priorityinput = component.container.querySelector('#modify-priority-input')
  const statusinput = component.container.querySelector('#modify-status-input')
  const form = component.container.querySelector('form')

  fireEvent.change(storyinput, {
    target: { value: 'As a user I want to create new user stories' }
  })
  fireEvent.change(priorityinput, {
    target: { value: 123 }
  })
  fireEvent.change(statusinput, {
    target: { value: 'modified' }
  })


  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  console.log(mockHandler.mock.calls[0])
  //expect(mockHandler.mock.calls[0].story).toBe('As a user I want to create new user stories' )
  //expect(mockHandler.mock.calls[0].priority).toBe('123')
  //expect(mockHandler.mock.calls[0].status).toBe('modified')
})