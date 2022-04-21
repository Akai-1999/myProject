import './Login.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getEtudiant, getLogin } from '../../API'
import { useEffect } from 'react'
export const Login = ({ setLogedIn }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/creecompte')
  }

  const [etudiant, setEtudiant] = useState({
    cne: '',
    cin: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEtudiant({
      ...etudiant,
      [name]: value,
    })
  }
  const login = async () => {
    try {
      const res = await getLogin(etudiant)
      if (res.message == 'succes') {
        setLogedIn(true)
        window.sessionStorage.setItem('cne', etudiant.cne)
        window.sessionStorage.setItem('cin', etudiant.cin)
        navigate('/home')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="form">
      <div className="titre_form">
        <img
          className="imglogin"
          src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
        />
      </div>
      <div className="login-form-wrapper">
        <div className="input">
          <label htmlFor="">CNE</label>
          <div>
            <input
              type="text"
              name="cne"
              value={etudiant.cne}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">CIN</label>
          <div>
            <input
              type="password"
              name="cin"
              value={etudiant.cin}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <button className="btn_1">Login</button> */}
        <button className="btn_2" onClick={login}>
          Login
        </button>

        <button className="btn_2" onClick={handleClick}>
          créer compte
        </button>
        <a href="admin">Admin Login</a>
      </div>
    </div>
  )
}
