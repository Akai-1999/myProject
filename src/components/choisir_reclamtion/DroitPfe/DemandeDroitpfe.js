import React from 'react'
import { postDemande } from '../../../API'
import './DemandeDroitpfe.css'

function DemandeDroitpfe() {
  const cne = window.sessionStorage.getItem('cne')

  const postData = async (e) => {
    e.preventDefault()
    await postDemande('droitPfe', {
      cneEtudiant: cne,
    })
    alert('Votre Demande est Envoyer')
  }

  return (
    <div className="contener">
      <div className="content">
        <h4>Demande Droit de PFE</h4>
        <p>
          si vous n'avez pas les droits de PFE ,vous pouvez soumettre une
          demande de réexamen par ici.
        </p>
        <form onSubmit={postData}>
          <button type="submit">Send Demande</button>
        </form>
      </div>
    </div>
  )
}

export default DemandeDroitpfe
