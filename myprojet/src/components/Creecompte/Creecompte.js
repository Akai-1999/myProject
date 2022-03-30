import React, { useState } from 'react'
import './Creecompte.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Creecompte() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
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
  const Creecompte = () => {
    const { nom, prenom, email, cne, phone, cin, filier } = etudiant
    if (nom && prenom && email && cne && cin && phone && filier) {
      axios
        .post('http://localhost:7000/creecompte', etudiant)
        .then((res) => console.log(res))
    } else {
      alert('non valide')
    }
  }

  return (
    <div className="formcreecmt">
      {console.log('Etudiant', etudiant)}
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

      <button className="btn_2" onClick={Creecompte}>
        Envoyer
      </button>
      <button className="btn_2" onClick={handleClick}>
        login
      </button>
    </div>
  )
}
export default Creecompte
