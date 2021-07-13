import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import ProductBacklog from '../components/ProductBacklog'

test('product backlog renders', () => {
  const stories = []

  const component = render(
    <ProductBacklog stories={stories} />
  )

  expect(component.container).toHaveTextContent(
    'Product Backlog'
  )
})

test('Clicking delete button calls delete function with story id as param', () => {
  const mockHandler = jest.fn()

  const stories = [
    {
      id: 1,
      story: 'As a user I want to create new user stories',
      priority: 1,
      status: 'done'
    },
    {
      id: 2,
      story: 'As a user I want to modify user stories',
      priority: 2,
      status: 'in progress'
    },
    {
      id: 3,
      story: 'As a user I want to delete user stories',
      priority: 99,
      status: 'not started'
    },
  ]

  const component = render(
    <ProductBacklog stories={stories} deleteUserStory={mockHandler} />
  )

  const button = component.getAllByText('delete')
  fireEvent.click(button[0])

  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler.mock.calls[0][0]).toBe(1)
})