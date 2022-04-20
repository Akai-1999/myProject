import './AdminLogin.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const AdmonLogin = ({ logedIn, setLogedIn }, { auth }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/creeradmin')
  }

  const [admin, setAdmin] = useState({
    code: '',
    gmail: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value,
    })
  }
  const AdminLogin = () => {
    axios.post('http://localhost:7000/AdmonLogin', admin).then((res) => {
      console.log(res)
      if (res.data.message == 'succes') {
        setLogedIn(true)
      } else {
        alert('rah pass ghalet')
      }
    })
    auth()
    navigate('/home')
  }

  return (
    <div className="form">
      {console.log('Admin', admin)}
      <div className="titre_form">
        <img
          className="imgAdmonLogin"
          src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
        />
      </div>
      <div className="AdmonLigin-form-wrapper">
        <div className="input">
          <label htmlFor="">Email</label>
          <div>
            <input
              type="email"
              name="email"
              value={admin.prenom}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Code</label>
          <div>
            <input
              type="password"
              name="code"
              value={admin.code}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <button className="btn_1">AdminLogin</button> */}
        <button className="btn_2" onClick={AdminLogin}>
          AdminLogin    
        </button>

        <button className="btn_2" onClick={handleClick}>
          créer Admin
        </button>
      </div>
    </div>
  )
}
