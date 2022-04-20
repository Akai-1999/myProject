import React, { useState } from 'react'
import './Creecompte.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { creeeEtudiant } from '../../API'
import { useEffect } from 'react'

function Creecompte() {
  const [isAdd, setIsAdd] = useState(false)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  const [etudiant, setEtudiant] = useState({
    nom: '',
    prenom: '',
    cne: '',
    cin: '',
    email: '',
    password: '',
    phone: '',
    filier: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setEtudiant({
      ...etudiant,
      [name]: value,
    })
  }

  useEffect(() => {
    setIsAdd(false)
  }, [])

  return (
    <form action="">
      <div className="formcreecmt">
        <div className="logo_form">
          <img
            className="imgcreecmt"
            src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
          />
        </div>

        <div className="input1">
          <label htmlFor="">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={etudiant.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <label htmlFor="">Prenom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={etudiant.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <label htmlFor="">CNE</label>
          <input
            type="text"
            id="cne"
            name="cne"
            value={etudiant.cne}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <label htmlFor="">CIN</label>
          <input
            type="password"
            id="cin"
            name="cin"
            value={etudiant.cin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={etudiant.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={etudiant.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input1">
          <label htmlFor="">Filiere</label>
          <input
            type="text"
            id="filier"
            name="filier"
            value={etudiant.filier}
            onChange={handleChange}
            required
          />
        </div>

        {isAdd ? 'Etudiant est bien cree' : ''}

        <button
          className="btn_2"
          onClick={async () => {
            setIsAdd(await creeeEtudiant(etudiant))
          }}
        >
          Envoyer
        </button>
        <button className="btn_2" onClick={handleClick}>
          login
        </button>
      </div>
    </form>
  )
}
export default Creecompte
