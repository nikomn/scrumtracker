import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import AddComment from '../components/AddComment'

test('<Comment /> renders', () => {

  const story = {
    id: 1,
    story: 'Testing with Jest',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done',
    tasks: [],
    comments: []
  }

  const component = render(
    <AddComment
      createNewComment={null}
      story={story.id} />
  )

  expect(component.container).toHaveTextContent(
    'Add new Comment'
  )
})


test('<AddComment /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const story = {
    id: 1,
    story: 'Testing with Jest',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done',
    tasks: [],
    comments: []
  }

  const component = render(
    <AddComment
      createNewComment={mockHandler}
      story={story.id} />
  )

  const commentinput = component.container.querySelector('#comment-input')
  const form = component.container.querySelector('form')

  fireEvent.change(commentinput, {
    target: { value: 'testing adding of new comment' }
  })

  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler.mock.calls[0][0].commentText).toBe('testing adding of new comment')
})

