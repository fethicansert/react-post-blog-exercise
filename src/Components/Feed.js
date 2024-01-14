import React from 'react'
import Post  from './Post'
function Feed({ posts, handleDelete }) {
  return (
    <>
      {posts.map(post => (
        <Post key={ post.id } post={ post } handleDelete={ handleDelete }></Post>
      ))}
    </>
  )
}

export default Feed
