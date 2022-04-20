import React from 'react'
import './changeBinom.css'

function ChangeBinom() {
  return (
    <div className="form-ChangeBinom">
      <div className="titre_form">
        <img
          className="imglogin"
          src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
        />
      </div>

      <div className="inputs">
        <h4>Changer Binome</h4>
        <div className="input">
          <label htmlFor="">Nom de binome</label>
          <div>
            <input type="nom" name="nom" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">Prenom de binome</label>
          <div>
            <input type="text" name="prenom" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="">CNE de binome</label>
          <div>
            <input type="text" name="cne" />
          </div>
        </div>

        <button type="submit">Envoyer</button>
      </div>
    </div>
  )
}

export default ChangeBinom
