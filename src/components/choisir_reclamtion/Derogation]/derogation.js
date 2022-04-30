import React from 'react'
import { useState } from 'react'
import { postDemande } from '../../../API'
import './derogation.css'

function Derogation() {
  const [radio, setRadio] = useState('')
  const cne = window.sessionStorage.getItem('cne')

  const postData = async (e) => {
    e.preventDefault()
    await postDemande('Derogation', {
      cneEtudiant: cne,
      annee: radio,
    })
    alert('Votre Demande est Envoyer')
  }
  return (
    <div className="contener">
      <div className="content">
        <h4>Demande de Dérogation</h4>
        <p>
          cette page pour faire une demande de dérogation soit pour l'anneé de
          DEUG ou Lisence, pour ça choisi votre anneé et cliquer sur Send pour
          envoyer votre demande;
        </p>
        <form onSubmit={postData}>
          <div className="messageType">
            <input
              type="radio"
              id="deug"
              name="type"
              value="deug"
              onChange={(e) => setRadio(e.target.value)}
            />
            <label htmlFor="deug">DEUG</label>
            <input
              type="radio"
              id="liscence"
              name="type"
              value="liscence"
              onChange={(e) => setRadio(e.target.value)}
            />
            <label htmlFor="liscence">Lisence</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Derogation
