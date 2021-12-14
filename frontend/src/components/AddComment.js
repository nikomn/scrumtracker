import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddComment = ({ createNewComment, story }) => {
  const [comment, setComment] = useState('')


  const addComment = (event) => {
    event.preventDefault()
    const newCommentObject = {
      commentText: comment
    }
    createNewComment(newCommentObject, story)
    setComment('')

  }
  return (
    <div className="addCommentForm">
      <h2>Add new Comment</h2>
      <Form onSubmit={addComment}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            id='comment-input'
            type="text"
            name="comment"
            value={comment}
            placeholder="New comment"
            onChange={({ target }) => setComment(target.value)}
          />
          <Button variant="success" type="submit">
            Add new task
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddComment