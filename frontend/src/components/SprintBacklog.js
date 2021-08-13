import React from 'react'
import { Table, Button } from 'react-bootstrap'
import UserStory from './UserStory'
import AddMaintenanceStory from './AddMaintenanceStory'
import { Link } from 'react-router-dom'

const SprintBacklog = ({ backlog, backlogs, addStoryToSprintBacklog, deleteUserStory, createNewStory }) => {
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
                <UserStory
                  userstory={story}
                  backlogs={backlogs}
                  addStoryToSprintBacklog={addStoryToSprintBacklog}
                  storyView={null}
                />
              </td>
              <td>
                <p>
                  <Link to={`/userstories/${story.id}`} className="btn btn-success">Info</Link>
                </p>
                <p>
                  <Button variant="danger" onClick={() => deleteUserStory(story.id)}>delete</Button>
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <AddMaintenanceStory backlog={backlog} addStoryToSprintBacklog={addStoryToSprintBacklog} createNewStory={createNewStory} />
    </div>
  )
}

export default SprintBacklog