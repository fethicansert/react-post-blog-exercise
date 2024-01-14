import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function PostPage({posts, handleDelete}) {
  const { id } = useParams();
  const currentPost = posts.find(post=> post.id.toString() === id);
  const navigate = useNavigate();

  return (
    <main>
      <article>
        {currentPost ? (
          <>
            <h1 className='postTitle'>{currentPost.title}</h1>
            <p className='postDate'>{currentPost.datetime}</p>
            <p className='postBody'>{currentPost.body}</p>
            <button onClick={() => handleDelete(currentPost.id)}>Delete</button>
          </>
        ) : (
          <>
            <h2>Page not Found</h2>
            <p>Opps Something went wrong :)</p>
            <Link to={'/'}>Visit our Home Page Please </Link>
          </>
        )}

      </article>
    </main>
  )
}

export default PostPage
