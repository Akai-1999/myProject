import './Login.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Login = ({ logedIn, setLogedIn }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/creecompte')
  }

  const [etudiant, setEtudiant] = useState({
    cne: '',
    cin: '',
    nom: '',
    prenom: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEtudiant({
      ...etudiant,
      [name]: value,
    })
  }
  const login = () => {
    axios.post('http://localhost:7000/login', etudiant).then((res) => {
      console.log(res)
      if (res.data.message !== 'etudiant not registred') {
        setLogedIn(true)
      } else {
        alert('rah pass ghalet')
      }
    })
  }

  return (
    <div className="form">
      {console.log('Etudiant', etudiant)}
      <div className="titre_form">
        <img
          className="imglogin"
          src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
        />
      </div>
      <div className="login-form-wrapper">
        <div className="input">
          <label htmlFor="">Prenom</label>
          <div>
            <input
              type="prenom"
              name="prenom"
              value={etudiant.prenom}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Nom</label>
          <div>
            <input
              type="text"
              name="nom"
              value={etudiant.nom}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">CNE</label>
          <input
            type="text"
            name="cne"
            value={etudiant.cne}
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="">CIN</label>
          <input
            type="password"
            name="cin"
            value={etudiant.cin}
            placeholder=""
            onChange={handleChange}
          />
        </div>

        {/* <button className="btn_1">Login</button> */}
        <button className="btn_2" onClick={login}>
          Login
        </button>

        <button className="btn_2" onClick={handleClick}>
          crée compte
        </button>
      </div>
    </div>
  )
}
