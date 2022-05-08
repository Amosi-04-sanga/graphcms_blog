import React from 'react'

const PostCard = ({post}) => {
  return (
    <>
        <p> {post.title} </p>
        <p> {post.excerpts} </p>
    </>
  )
}

export default PostCard