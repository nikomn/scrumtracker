import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SprintBacklogList = ({ backlogs }) => {
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
    </div>
  )
}

export default SprintBacklogList