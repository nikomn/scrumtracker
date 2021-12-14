import React from 'react'

const Task = ({ task }) => {
  if (!task) {
    return null
  }
  return (
    <div className='task'>
      <p>
        <b>Task:</b> {task.name} <br />
        <b>Status:</b> {task.status}
      </p>
    </div>
  )
}

export default Task