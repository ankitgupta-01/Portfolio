import React from 'react'

const Navbar = () => {
  return (
     <nav className="nav">
        <div className="logo">Portfolio</div>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navbar