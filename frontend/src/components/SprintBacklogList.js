import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddSprintBacklog from './AddSprintBacklog'


const SprintBacklogList = ({ backlogs, createSprintBacklog }) => {
  return (
    <div>
      <h2>Sprint Backlogs</h2>
      <Table striped hover>
        <tbody>
          {backlogs.map(backlog =>
            <tr key={backlog.id}>
              <td>
                <Link to={`/sprintbacklogs/${backlog.id}`}>{backlog.name}</Link>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <AddSprintBacklog createSprintBacklog={createSprintBacklog} />
    </div>
  )
}

export default SprintBacklogList