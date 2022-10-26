import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='conatiner'>
          <h1>FITNESS APP</h1>
        <nav>
        <ul>
            <li style={{color: "#FFF200"}}>APP</li>
            <li>TRANING</li>
            <li>ABOUT US</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar