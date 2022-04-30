import React from 'react'
import { useState } from 'react'
import { postDemande } from '../../../API'
import './AjouterModule.css'

function AjouterModule() {
  const [nomModule, setNomModule] = useState('')
  const cne = window.sessionStorage.getItem('cne')

  const postData = async () => {
    await postDemande('ajouterModule', {
      nomModule: nomModule,
      cneEtudiant: cne,
    })
    alert('Votre Demande est Envoyer')
  }

  return (
    <div className="form-AjouterModule">
      <div className="titre_form">
        <img
          className="imglogin"
          src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
        />
      </div>

      <div className="inputs">
        <h4>Ajouter Module</h4>

        <div className="input">
          <label htmlFor="">Nom de module</label>
          <div>
            <input type="text" onChange={(e) => setNomModule(e.target.value)} />
          </div>
        </div>

        <button onClick={postData}>Envoyer</button>
      </div>
    </div>
  )
}

export default AjouterModule
