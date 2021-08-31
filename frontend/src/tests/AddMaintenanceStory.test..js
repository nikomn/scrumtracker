import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AddMaintenanceStory from '../components/AddMaintenanceStory'

test('<AddMaintenanceStory /> renders', () => {
  const backlog = {
    name: 'test'
  }

  // createNewStory, addStoryToSprintBacklog, backlog

  const component = render(
    <AddMaintenanceStory createNewStory={null} addStoryToSprintBacklog={null} backlog={backlog} />
  )

  expect(component.container).toHaveTextContent(
    'Add maintenance story'
  )
})