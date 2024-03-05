import React from 'react'
import logo from "../../logo.svg"
import './Header.css'

const Header = () => {
  return (
    <header className= 'header'>
    <img src={logo} alt="Logo" className='logo' />
    <nav>
        <ul>
            <li>Home</li>
            <li>about us</li>
            <li>contact</li>
        </ul>
    </nav>
    </header>
  )
}

export default Header