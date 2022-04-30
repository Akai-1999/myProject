import React, { useState } from 'react'
import { postDemande } from '../../../API'
import './changeBinom.css'

function ChangeBinom() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [cneb, setCneB] = useState('')
  const cne = window.sessionStorage.getItem('cne')

  const postData = async () => {
    await postDemande('changebinom', {
      nomBinom: nom,
      prenomBinom: prenom,
      cneBinome: cneb,
      cneEtudiant: cne,
    })
    alert('Votre Demande est Envoyer')
  }

  return (
    <div className="form-ChangeBinom">
      <div className="titre_form">
        <img
          className="imglogin"
          src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
        />
      </div>

      <div className="inputs">
        <h4>Changer Binome</h4>
        <div className="input">
          <label htmlFor="">Nom de binome</label>
          <div>
            <input type="text" onChange={(e) => setNom(e.target.value)} />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Prenom de binome</label>
          <div>
            <input type="text" onChange={(e) => setPrenom(e.target.value)} />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">CNE de binome</label>
          <div>
            <input type="text" onChange={(e) => setCneB(e.target.value)} />
          </div>
        </div>

        <button onClick={postData}>Envoyer</button>
      </div>
    </div>
  )
}

export default ChangeBinom
