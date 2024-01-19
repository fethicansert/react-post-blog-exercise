import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DataContext from '../Context/DataContext';
function PostPage() {
  const { posts, handleDelete } = useContext(DataContext);
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
            <button className='delete-btn' onClick={() => handleDelete(currentPost.id)}>Delete</button>
            <Link to={`/update/${currentPost.id}`}><button className='update-btn'>Edit</button></Link>
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
