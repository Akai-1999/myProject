import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './../../images/logo.png'
import './Header.css'

const Header = ({ logedIn, adminLogedIn, setLogedIn, setAdminLogedIn }) => {
  const navigate = useNavigate()
  const showMenu = () => {
    const header = document.querySelector('.header')
    header.classList.toggle('show')
  }

  const logOut = () => {
    setLogedIn(false)
    setAdminLogedIn(false)
    window.sessionStorage.removeItem('cne')
    window.sessionStorage.removeItem('cin')
    window.sessionStorage.removeItem('email')
    window.sessionStorage.removeItem('password')
    navigate('/')
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
          {(logedIn || adminLogedIn) && (
            <li>
              <i className="fas fa-sign-out" onClick={logOut}></i>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
