import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SprintBacklogList from '../components/SprintBacklogList'
import {
  BrowserRouter as Router
} from 'react-router-dom'

test('<SprintBacklogList /> renders', () => {
  const backlogs = [
    {
      id: 1,
      name: 'Backlog 1',
    }
  ]

  const component = render(
    <Router>
      <SprintBacklogList backlogs={backlogs} />
    </Router>
  )

  expect(component.container).toHaveTextContent(
    'Sprint Backlogs'
  )
  expect(component.container).toHaveTextContent(
    'Backlog 1'
  )
})

