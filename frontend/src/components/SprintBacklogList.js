import React from 'react'
import { Table } from 'react-bootstrap'

const SprintBacklogList = ({ backlogs }) => {
  return (
    <div>
      <h2>Sprint Backlogs</h2>
      <Table striped hover>
        <tbody>
          {backlogs.map(backlog =>
            <tr key={backlog.id}>
              <td>
                {backlog.name}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default SprintBacklogList