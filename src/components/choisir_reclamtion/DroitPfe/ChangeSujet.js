import React from 'react'
import './ChangeSujet.css'

function ChangeSujet() {
  return (
    <div className="contener">
      <div className="content">
        <h4>Changement de Sujet</h4>
        <p>
          Pour changer votre sujet de PFE Veuillez votre suggestion
          ci-dessous,au contraire de ça le prof choisir votre sujet.
        </p>
        <form action="">
          <textarea
            name="describtion"
            cols="30"
            rows="10"
            placeholder="mettez votre suggestion..."
          ></textarea>
          {/* <div className="messageType">
            <input type="radio" id="type" name="type" value="bug" />
            <label htmlFor="type">Bug</label>
            <input type="radio" id="type" name="type" value="comment" />
            <label htmlFor="type">Comment</label>
            <input type="radio" id="type" name="type" value="other" />
            <label htmlFor="type">Other</label>
          </div> */}
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default ChangeSujet
