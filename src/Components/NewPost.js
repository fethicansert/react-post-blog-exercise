import React from 'react'

function NewPost({postTitle, setPostTitle, postBody, setPostBody, sharePost}) {
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
       <button type='submmit'>Share</button>
      </form>
    </main>
  )
}

export default NewPost
