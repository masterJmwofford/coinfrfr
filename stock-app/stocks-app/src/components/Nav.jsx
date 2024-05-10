import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <Link to="/stocks">
        <div>Home</div>
      </Link>


      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  )
}

export default Nav
