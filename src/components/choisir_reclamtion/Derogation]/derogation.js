import React from 'react'
import './derogation.css'

function Derogation() {
  return (
    <div className="contener">
      <div className="content">
        <h4>Demande de Dérogation</h4>
        <p>
          cette page pour faire une demande de dérogation soit pour l'anneé de
          DEUG ou Lisence, pour ça choisi votre anneé et cliquer sur Send pour
          envoyer votre demande;
        </p>
        <form action="">
          {/* <textarea
            name="describtion"
            cols="30"
            rows="10"
            placeholder="Describe your issue or idea..."
          ></textarea> */}
          <div className="messageType">
            <input type="radio" id="bug" name="type" value="bug" />
            <label htmlFor="bug">DEUG</label>
            <input type="radio" id="comment" name="type" value="comment" />
            <label htmlFor="comment">Lisence</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Derogation
