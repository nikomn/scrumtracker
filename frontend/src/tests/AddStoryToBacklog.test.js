import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AddStoryToBacklog from '../components/AddStoryToBacklog'

test('<AddStoryToBacklog /> renders', () => {

  const backlogs = []

  const component = render(
    <AddStoryToBacklog
      userstory={null}
      backlogs={backlogs}
      addStoryToSprintBacklog={null}
    />
  )

  expect(component.container).toHaveTextContent(
    'Add story to Sprint backlog'
  )
})