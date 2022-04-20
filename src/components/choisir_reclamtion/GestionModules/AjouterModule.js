import React from 'react'
import './AjouterModule.css'

function AjouterModule() {
  return (
    <div className="form-AjouterModule">
      <div className="titre_form">
        <img
          className="imglogin"
          src="http://e-fsdm.usmba.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1610308206/headermoodle.jpg"
        />
      </div>

      <div className="inputs">
        <h4>Ajouter Module</h4>

        <div className="input">
          <label htmlFor="">Nom de module</label>
          <div>
            <input type="text" name="prenom" />
          </div>
        </div>

        <button>Envoyer</button>
      </div>
    </div>
  )
}

export default AjouterModule
