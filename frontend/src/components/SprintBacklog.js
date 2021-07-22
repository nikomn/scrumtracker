import React from 'react'
import { Table } from 'react-bootstrap'
import UserStory from './UserStory'
import { Link } from 'react-router-dom'

const SprintBacklog = ({ backlog }) => {
  if (!backlog) {
    return null
  }
  return (
    <div>
      <h2>Sprint Backlog for {backlog.name}</h2>
      <Table striped hover>
        <tbody>
          {backlog.userstories.map(story =>
            <tr key={story.id}>
              <td>
                <Link to={`/userstories/${story.id}`}><UserStory userstory={story} /></Link>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default SprintBacklog