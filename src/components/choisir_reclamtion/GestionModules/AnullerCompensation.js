import React from 'react'
import { postDemande } from '../../../API'
import './AnullerCompensation.css'

function AnullerCompensation() {
  const cne = window.sessionStorage.getItem('cne')

  const postData = async (e) => {
    e.preventDefault()
    await postDemande('compentation', {
      cneEtudiant: cne,
    })
    alert('Votre Demande est Envoyer')
  }

  return (
    <div className="contener">
      <div className="content">
        <h4>Anuller La Compentation</h4>
        <p>
          si vous souhaitez retirer la Compentation de la dernier semestre
          ,cliquer sur le button au-dessous.
        </p>
        <form onSubmit={postData}>
          <button type="submit">Envoyer Demande</button>
        </form>
      </div>
    </div>
  )
}

export default AnullerCompensation
