import React from 'react'

const Comment = ({ comment }) => {
  if (!comment) {
    return null
  }
  return (
    <div className='comment'>
      <p>
        <b>{comment.date}:</b> {comment.commentText}
      </p>
    </div>
  )
}

export default Comment