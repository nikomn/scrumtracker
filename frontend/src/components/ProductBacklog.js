import React from 'react'
import { Table, Button } from 'react-bootstrap'
import UserStory from './UserStory'

const ProductBacklog = ({ stories, deleteUserStory }) => {
  return (
    <div>
      <h2>Product Backlog</h2>
      <Table striped hover>
        <tbody>
          {stories.map(story =>
            <tr key={story.id}>
              <td>
                <UserStory userstory={story} />
              </td>
              <td>
                <Button variant="danger" size="lg" onClick={() => deleteUserStory(story.id)}>delete</Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductBacklog