import React from 'react'
import { Table } from 'react-bootstrap'
import UserStory from './UserStory'

const SprintBacklog = ({ backlog }) => {
  //console.log(backlog)
  return (
    <div>
      <h2>Sprint Backlog for {backlog.name}</h2>
      <Table striped hover>
        <tbody>
          {backlog.userstories.map(story =>
            <tr key={story.id}>
              <td>
                <UserStory userstory={story} />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default SprintBacklog