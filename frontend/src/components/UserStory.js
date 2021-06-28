import React from 'react'

const UserStory = ({ userstory }) => {
  return (
    <div className='userstory'>
      <p>
        {userstory.story}
      </p>
    </div>
  )
}

export default UserStory