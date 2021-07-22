import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserStory from './UserStory'

const ProductBacklog = ({ stories, deleteUserStory, backlogs, addStoryToSprintBacklog }) => {
  return (
    <div>
      <h2>Product Backlog</h2>
      <Table striped hover>
        <tbody>
          {stories.map(story =>
            <tr key={story.id}>
              <td>
                <Link to={`/userstories/${story.id}`}>story</Link>
                <UserStory
                  userstory={story}
                  backlogs={backlogs}
                  addStoryToSprintBacklog={addStoryToSprintBacklog}
                />
              </td>
              <td>
                <p>
                  <Button variant="danger" size="lg" onClick={() => deleteUserStory(story.id)}>delete</Button>
                </p>
                <p>
                  <Link to={`/userstories/${story.id}`} className="btn btn-success">Testi</Link>
                </p>
              </td>

            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductBacklog