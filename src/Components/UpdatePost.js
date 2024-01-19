import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../Context/DataContext';

const UpdatePost = () => {
  const { posts, updateTitle, setUpdateTitle , updateBody, setUpdateBody, handleUpdate  } = useContext(DataContext);
  console.log(posts);
  const { id } = useParams();
  const currentPost = posts.find(post => post.id === id);

  useEffect(() => {
    if(currentPost){
      setUpdateTitle(currentPost.title);
      setUpdateBody(currentPost.body); 
    }
  },[posts]);

  return (
    <main className='post-page'>
      {currentPost
      ?<form className='newpost-form' >
        <label htmlFor='post-title'>
            Post Title:
            <input id='post-title' type='text' value={updateTitle}  onChange={(e) => setUpdateTitle(e.target.value)} required autoFocus></input>
          </label>
        <label htmlFor='post-body'>
            Post Content:
            <textarea id='post-body' type='text' value={updateBody} onChange={(e) => setUpdateBody(e.target.value)}  maxLength={1000} required></textarea>
        </label>
        <button className='update-post-btn' type='submmit' onClick={(e) => handleUpdate(e,currentPost.id) }>Update</button>
      </form>
      :<p className='post-not-found-text'>Post not Found</p>}
    </main>
  )
}

export default UpdatePost;
