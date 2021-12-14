import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Comment from '../components/Comment'

test('<Comment /> renders', () => {
  const comment = {
    id: 1,
    commentText: 'Testing with Jest',
    date: '2021-21-21T01:01:01.000Z',
  }

  const component = render(
    <Comment comment={comment} />
  )

  expect(component.container).toHaveTextContent(
    '2021-21-21T01:01:01.000Z: Testing with Jest'
  )
})