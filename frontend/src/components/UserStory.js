import React from 'react'

const UserStory = ({ userstory }) => {
  return (
    <div className='userstory'>
      <p>
        <b>User Story:</b> {userstory.story} <br />
        <b>Priority:</b> {userstory.priority} <br />
        <b>Status:</b> {userstory.status}
      </p>
    </div>
  )
}

export default UserStory