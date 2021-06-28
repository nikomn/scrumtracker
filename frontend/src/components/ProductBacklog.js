import React from 'react'
import UserStory from './UserStory'

const ProductBacklog = ({ stories }) => {
  return (
    <div>
      <h2>Product Backlog</h2>
      <ul>
        {stories.map(story =>
          <li key={story.id}>
            <UserStory userstory={story} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default ProductBacklog