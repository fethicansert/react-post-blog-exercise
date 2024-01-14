import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav({ search, setSearch }) {
  return (
    <div className='nav-container'>
     <div className='nav-wrapper'>
      <input value={search} onChange={(e)=> setSearch(e.target.value)} type='search' placeholder='Search Posts'></input>
      <nav style={{display:'flex'}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='post'>Post</NavLink>
        <NavLink to='about'>About</NavLink>
      </nav>
     </div>
    </div>
  )
}

export default Nav
