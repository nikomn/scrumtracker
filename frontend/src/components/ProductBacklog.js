import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserStory from './UserStory'

const ProductBacklog = ({ stories, deleteUserStory, backlogs, addStoryToSprintBacklog }) => {
  const filteredStories = stories.filter(s => s.type === 'story')
  return (
    <div>
      <h2>Product Backlog</h2>
      <Table striped hover>
        <tbody>
          {filteredStories.map(story =>
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
                  <Link to={`/userstories/${story.id}`} className="btn btn-success" id='storyinfo-button' >Info</Link>
                </p>
                <p>
                  <Button variant="danger" id='delete-story-button' onClick={() => deleteUserStory(story.id)}>delete</Button>
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