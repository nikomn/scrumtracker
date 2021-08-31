import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import AddMaintenanceStory from '../components/AddMaintenanceStory'

test('<AddMaintenanceStory /> renders', () => {
  const backlog = {
    name: 'test'
  }

  // backlog, createMaintenanceStory

  const component = render(
    <AddMaintenanceStory createMaintenanceStory={null} backlog={backlog} />
  )

  expect(component.container).toHaveTextContent(
    'Add maintenance story'
  )
})

test('clicking add story button calls event handler once', async () => {
  const backlog = {
    name: 'test',
    id: 1
  }

  const mockHandler = jest.fn()

  const component = render(
    <AddMaintenanceStory createMaintenanceStory={mockHandler} backlog={backlog} />
  )

  const button = component.getByText('Add new story')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})


test('<AddMaintenanceStory /> updates parent state and calls onSubmit', () => {
  const backlog = {
    name: 'test',
    id: 1
  }

  const mockHandler = jest.fn()

  const component = render(
    <AddMaintenanceStory createMaintenanceStory={mockHandler} backlog={backlog} />
  )

  const storyinput = component.container.querySelector('#story-input')
  const priorityinput = component.container.querySelector('#priority-input')
  //const statusinput = component.container.querySelector('#status-input')
  const statusdropdown = component.container.querySelector('#status-dropdown')
  const form = component.container.querySelector('form')

  fireEvent.change(storyinput, {
    target: { value: 'testing adding of new maintenance story' }
  })
  fireEvent.change(priorityinput, {
    target: { value: 123 }
  })
  fireEvent.change(statusdropdown, {
    target: { value: 'done' }
  })


  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
  //console.log(mockHandler.mock.calls[0][0])
  //console.log(mockHandler.mock.calls[0])
  expect(mockHandler.mock.calls[0][0].story).toBe('testing adding of new maintenance story' )
  expect(mockHandler.mock.calls[0][0].priority).toBe('123')
  expect(mockHandler.mock.calls[0][0].status).toBe('done')
  expect(mockHandler.mock.calls[0][1].name).toBe('test')
  expect(mockHandler.mock.calls[0][1].id).toBe(1)

})