import React from 'react'
import Feed from './Feed'

function Home({ posts, handleDelete }) {

  return (
    <main className='home-page'>
      {posts.length ? (
        <Feed posts={ posts } handleDelete={ handleDelete }></Feed>
      ): (
        <p style={{marginTopF: '2rem'}}>No Post to Display.</p>
      )}
    </main>
  )
}

export default Home
