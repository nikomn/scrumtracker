import React from 'react'
import UserStory from './UserStory'

const ProductBacklog = ({ stories, deleteUserStory }) => {
  return (
    <div>
      <h2>Product Backlog</h2>
      <ul>
        {stories.map(story =>
          <li key={story.id}>
            <UserStory userstory={story} />
            <button onClick={() => deleteUserStory(story.id)}>delete</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ProductBacklog