import { postDemande } from '../../../API'
import './Recorrection.css'
import React from 'react'
import { useState } from 'react'

function Recorrection() {
  const [nomModule, setNomModule] = useState('')
  const cne = window.sessionStorage.getItem('cne')

  const postData = async (e) => {
    e.preventDefault()
    await postDemande('recorrection', {
      nomModule: nomModule,
      cneEtudiant: cne,
    })
    alert('Votre Demande est Envoyer')
  }

  return (
    <div className="contener">
      <div className="content">
        <h4>Recorrection</h4>
        <p>
          Si vous voulez tirez la compensation de la derniere semestre ,cliquer
          sur le button pour envoyer une demande de anullation.
        </p>
        <form onSubmit={postData}>
          <div className="input2">
            <input
              type="text"
              placeholder="Nom de module que vous voulez corriger"
              onChange={(e) => setNomModule(e.target.value)}
            />
          </div>
          <button type="submit">Envoyer Demande</button>
        </form>
      </div>
    </div>
  )
}

export default Recorrection
