import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="logo">FavMovies</div>
      <nav>
        <ul>
          <li><a href="/">Log in</a></li>
          <li><a href="/">Sign in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header