import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import UserStory from '../components/UserStory'

test('user story content renders', () => {
  const story = {
    id: 1,
    story: 'Testing with Jest',
    priority: 1,
    date: '2021-06-17T08:30:31.123Z',
    status: 'done',
    tasks: []
  }

  const backlogs= []

  const component = render(
    <UserStory userstory={story} backlogs={backlogs} />
  )

  expect(component.container).toHaveTextContent(
    'Story: Testing with Jest'
  )
  expect(component.container).toHaveTextContent(
    'Priority: 1'
  )
  expect(component.container).toHaveTextContent(
    'Status: done'
  )
})