import React from 'react'

function Recorrection() {
  return (
    <div className="contener">
      <div className="content">
        <h4>Recorrection</h4>
        <p>
          Si vous voulez tirez la compensation de la derniere semestre ,cliquer
          sur le button pour envoyer une demande de anullation.
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

export default Recorrection
