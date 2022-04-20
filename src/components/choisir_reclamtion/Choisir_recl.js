import React from 'react'
import './Choisir_recl.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Derogation from './Derogation]/derogation'
import { useNavigate } from 'react-router-dom'

function Choisir_recl() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/home/choisirreclamation/derogation')
  }
  const handleClick_changebinom = () => {
    navigate('/home/choisirreclamation/changebinome')
  }

  const handleClick_changesujet = () => {
    navigate('/home/choisirreclamation/changesujet')
  }
  const handleClick_DemandeDroitpfe = () => {
    navigate('/home/choisirreclamation/demandedroitpfe')
  }
  ///////////////////////////////////////////////////////////////
  const handleClick_ajoutermodule = () => {
    navigate('/home/choisirreclamation/ajoutermodule')
  }

  const handleClick_anullercomentation = () => {
    navigate('/home/choisirreclamation/anullercompentation')
  }
  const Recorrection = () => {
    navigate('/home/choisirreclamation/recorrection')
  }
  return (
    <div className="containte">
      <div id="div1" className="item">
        <div className="titre button_pfe">
          <h4>Droit De PFE</h4>
          <ul>
            <li>
              <div className="buttom" onClick={handleClick_changebinom}>
                <a href="changebinome">Changement binome</a>
              </div>
            </li>
            <li>
              <div className="buttom" onClick={handleClick_changesujet}>
                <a href="changesujet">Changement de sujet</a>
              </div>
            </li>
            <li>
              <div className="buttom" onClick={handleClick_DemandeDroitpfe}>
                <a href="demandedroitpfe">Demande de droit pfe</a>
              </div>
            </li>
          </ul>
          {/* <ppre>Pour changer un binome ou change le sujet et droit de pfe</ppre> */}
        </div>
      </div>

      <div id="div2" className="item">
        <div className="titre button_GN">
          <h4>Gestion Des Notes</h4>
          <p>pour faire une recorrection</p>
          <ul>
            <li>
              <div className="buttom" onClick={Recorrection}>
                {' '}
                <a href="recorrection">Recorrection</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div id="div3" className="item">
        <div className="titre button_GM">
          <h4>Gestion Des Modules</h4>
          {/* <p>Pour ajoute ou retirer une Module ou annuller la compensation</p> */}
          <ul>
            <li>
              <div className="buttom" onClick={handleClick_ajoutermodule}>
                <a href="ajoutermodule">Ajouter module</a>
              </div>
            </li>

            <li>
              <div className="buttom" onClick={handleClick_anullercomentation}>
                <a href="anullercomentation">Anuller compensation</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div id="div4" className="item">
        <div className="titre button_der">
          <h4>Dérogation</h4>
          <p>Pour demande de dérogation pour l'année de DEUG ou License </p>
          <ul>
            <li>
              <div className="buttom" onClick={handleClick}>
                {' '}
                <a href="derogation">Demander</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Choisir_recl
