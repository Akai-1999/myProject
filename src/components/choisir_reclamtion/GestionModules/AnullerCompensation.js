import React from 'react'
import './AnullerCompensation.css'

function AnullerCompensation() {
  return (
    <div className="contener">
      <div className="content">
        <h4>Anuller La Compentation</h4>
        <p>
          si vous souhaitez retirer la Compentation de la dernier semestre
          ,cliquer sur le button au-dessous.
        </p>
        <form action="">
          {/* <textarea
            name="describtion"
            cols="30"
            rows="10"
            placeholder="Describe your issue or idea..."
          ></textarea>
          <div className="messageType">
            <input type="radio" id="type" name="type" value="bug" />
            <label htmlFor="type">Bug</label>
            <input type="radio" id="type" name="type" value="comment" />
            <label htmlFor="type">Comment</label>
            <input type="radio" id="type" name="type" value="other" />
            <label htmlFor="type">Other</label>
          </div> */}
          <button type="submit">Envoyer Demande</button>
        </form>
      </div>
    </div>
  )
}

export default AnullerCompensation
