import React from 'react'
import './DemandeDroitpfe.css'

function DemandeDroitpfe() {
  return (
    <div className="contener">
      <div className="content">
        <h4>Demande Droit de PFE</h4>
        <p>
          si vous n'avez pas les droits de PFE ,vous pouvez soumettre une
          demande de réexamen par ici.
        </p>
        <form action="">
          {/* <textarea
            name="describtion"
            cols="30"
            rows="10"
            placeholder="Describe your issue or idea..."
          ></textarea> */}
          {/* <div className="messageType">
            <input type="radio" id="type" name="type" value="bug" />
            <label htmlFor="type">Bug</label>
            <input type="radio" id="type" name="type" value="comment" />
            <label htmlFor="type">Comment</label>
            <input type="radio" id="type" name="type" value="other" />
            <label htmlFor="type">Other</label>
          </div> */}
          <button type="submit">Send Demande</button>
        </form>
      </div>
    </div>
  )
}

export default DemandeDroitpfe
