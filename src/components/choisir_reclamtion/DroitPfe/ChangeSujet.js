import React from 'react'
import './ChangeSujet.css'
import { useState } from 'react'
import { postDemande } from '../../../API'

function ChangeSujet() {
  const cne = window.sessionStorage.getItem('cne')

  const [changeSujet, setChangeSujet] = useState('')
  const handleChange = (e) => {
    const { value } = e.target
    setChangeSujet(value)
  }

  const postData = async (e) => {
    e.preventDefault()
    await postDemande('changeSujet', {
      cne: cne,
      textarea: changeSujet,
      cneEtudiant: cne,
    })
    alert('Votre Demande est Envoyer')
  }

  return (
    <div className="contener">
      <div className="content">
        <h4>Changement de Sujet</h4>
        <p>
          Pour changer votre sujet de PFE Veuillez votre suggestion
          ci-dessous,au contraire de ça le prof choisir votre sujet.
        </p>
        <form onSubmit={postData}>
          <textarea
            name="describtion"
            cols="30"
            rows="10"
            placeholder="mettez votre suggestion..."
            value={changeSujet.filier}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default ChangeSujet
