import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SprintBacklog from '../components/SprintBacklog'

test('backlog content renders', () => {

  const backlog = {
    id: 1,
    name: 'Test backlog',
    userstories: []
  }


  const component = render(
    <SprintBacklog backlog={backlog} />
  )

  expect(component.container).toHaveTextContent(
    'Sprint Backlog for Test backlog'
  )

})