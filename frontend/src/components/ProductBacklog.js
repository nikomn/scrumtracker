import React from 'react'
import { Table } from 'react-bootstrap'
import UserStory from './UserStory'

const ProductBacklog = ({ stories, deleteUserStory }) => {
  return (
    <div>
      <h2>Product Backlog</h2>
      <Table striped>
        <tbody>
          {stories.map(story =>
            <tr key={story.id}>
              <td>
                <UserStory userstory={story} />
              </td>
              <td>
                <button onClick={() => deleteUserStory(story.id)}>delete</button>
              </td>

            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductBacklog