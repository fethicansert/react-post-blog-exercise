import React from 'react'

function Footer() {
  const yearDate =  new Date().getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; By Suguru Can Sert {yearDate}</h4>
    </footer>
  )
}

export default Footer
