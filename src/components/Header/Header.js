import React from 'react'
import logo from './../../images/logo.png'
import './Header.css'

const Header = () => {
  const showMenu = () => {
    const header = document.querySelector('.header')
    header.classList.toggle('show')
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <button onClick={showMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="http://e-fsdm.usmba.ac.ma/">MOODEL</a>
          </li>
          <li>
            <a href="http://www.fsdmfes.ac.ma">FSDM</a>
          </li>
          <li>
            <a href="mailto:adnane_1@yahoo.fr">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
