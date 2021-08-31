import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
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

test('clicking add story button calls event handlers once', async () => {
  const backlog = {
    name: 'test'
  }

  const mockCreateHandler = jest.fn()
  const mockAddHandler = jest.fn()

  const component = render(
    <AddMaintenanceStory createNewStory={mockCreateHandler} addStoryToSprintBacklog={mockAddHandler} backlog={backlog} />
  )

  const button = component.getByText('Add new story')
  fireEvent.click(button)

  expect(mockCreateHandler.mock.calls).toHaveLength(1)
  //expect(mockAddHandler.mock.calls).toHaveLength(1)
})


// test('<AddMaintenanceStory /> updates parent state and calls onSubmit', () => {
//   const backlog = {
//     name: 'test',
//     id: 1
//   }

//   const mockCreateHandler = jest.fn()
//   const mockAddHandler = jest.fn()

//   const component = render(
//     <AddMaintenanceStory createNewStory={mockCreateHandler} addStoryToSprintBacklog={mockAddHandler} backlog={backlog} />
//   )

//   const storyinput = component.container.querySelector('#story-input')
//   const priorityinput = component.container.querySelector('#priority-input')
//   //const statusinput = component.container.querySelector('#status-input')
//   const statusdropdown = component.container.querySelector('#status-dropdown')
//   const form = component.container.querySelector('form')

//   fireEvent.change(storyinput, {
//     target: { value: 'testing adding of new maintenance story' }
//   })
//   fireEvent.change(priorityinput, {
//     target: { value: 123 }
//   })
//   fireEvent.change(statusdropdown, {
//     target: { value: 'done' }
//   })


//   fireEvent.submit(form)

//   console.log(mockAddHandler.mock.calls[0])

//   expect(mockCreateHandler.mock.calls).toHaveLength(1)
//   //console.log(mockHandler.mock.calls[0][0])
//   //console.log(mockHandler.mock.calls[0])
//   expect(mockCreateHandler.mock.calls[0][0].story).toBe('testing adding of new user story' )
//   expect(mockCreateHandler.mock.calls[0][0].priority).toBe('123')
//   expect(mockCreateHandler.mock.calls[0][0].status).toBe('done')

// })