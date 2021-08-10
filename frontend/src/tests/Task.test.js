import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Task from '../components/Task'

test('<Task /> renders', () => {
  const task = {
    id: 1,
    name: 'Testing with Jest',
    status: 'done',
  }

  const component = render(
    <Task task={task} />
  )

  expect(component.container).toHaveTextContent(
    'Task: Testing with Jest'
  )
  expect(component.container).toHaveTextContent(
    'Status: done'
  )
})