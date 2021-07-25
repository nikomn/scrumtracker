import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
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

test('<AddStoryToBacklog /> updates parent state and calls onSubmit', () => {
  const mockHandler = jest.fn()

  const backlogs = [
    {
      id: 'a123',
      name: 'sprint0'
    },
    {
      id: 'b456',
      name: 'sprint1'
    }
  ]

  const userstory = {
    id: 1,
    story: 'test story'
  }

  const component = render(
    <AddStoryToBacklog
      userstory={userstory}
      backlogs={backlogs}
      addStoryToSprintBacklog={mockHandler}
    />
  )

  const backlogdropdown = component.container.querySelector('#dropdown')
  const form = component.container.querySelector('form')

  //component.debug(backlogdropdown)

  fireEvent.change(backlogdropdown, {
    target: { value: 'b456' }
  })


  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)

  //console.log(mockHandler.mock.calls[0])
  expect(mockHandler.mock.calls[0][1]).toBe('b456' )
  expect(mockHandler.mock.calls[0][0].story).toBe('test story' )
})