import React from 'react'

const UserStory = ({ userstory }) => {
  return (
    <div>
      <p>
        {userstory.story}
      </p>
    </div>
  )
}

export default UserStory