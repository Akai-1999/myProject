import './AdminLogin.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoginAdmin } from '../../API'
export const AdmonLogin = ({ setAdminLogedIn }) => {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value,
    })
  }
  const AdminLogin = async () => {
    try {
      const res = await getLoginAdmin(admin)
      if (res.message == 'succes') {
        setAdminLogedIn(true)
        window.sessionStorage.setItem('email', admin.email)
        window.sessionStorage.setItem('password', admin.password)
        navigate('/admin/suivre')
      }
      if (res.message == 'email est incorrect') {
        alert('email INCORRECT')
      }
      if (res.message == 'password est incorrect') {
        alert('password INCORRECT')
      }
    } catch (err) {
      console.error(err)
    }
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
          <label htmlFor="">Password</label>
          <div>
            <input
              type="password"
              name="password"
              value={admin.password}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <button className="btn_1">AdminLogin</button> */}
        <button className="btn_2" onClick={AdminLogin}>
          Login
        </button>
      </div>
    </div>
  )
}
