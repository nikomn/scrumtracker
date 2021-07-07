import React from 'react'

const UserStory = ({ userstory }) => {
  return (
    <div className='userstory'>
      <p>
        User Story: {userstory.story} <br />
        Priority: {userstory.priority} <br />
        Status: {userstory.status}
      </p>
    </div>
  )
}

export default UserStory