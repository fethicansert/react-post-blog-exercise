import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useIsMounted from '../Hooks/useIsMounted';
import DataContext from '../Context/DataContext';
function NewPost() {
  const navigate = useNavigate();
  useIsMounted("newPost")
  const { sharePost, postTitle, postBody, setPostTitle, setPostBody } = useContext(DataContext);
  return (
    <main className='post-page'>
      <form className='newpost-form' onSubmit={ sharePost }>
        <label htmlFor='post-title'>
          Post Title:
          <input id='post-title' type='text' value={ postTitle } onChange={ (e) => setPostTitle(e.target.value) } required autoFocus></input>
        </label>
       <label htmlFor='post-body'>
          Post Content:
          <textarea id='post-body' type='text' value={postBody} onChange={ (e) => setPostBody(e.target.value) } maxLength={1000} required></textarea>
       </label>
       <button className='submit-post-btn' type='submmit'>Share</button>
      </form>
    </main>
  )
}

export default NewPost
