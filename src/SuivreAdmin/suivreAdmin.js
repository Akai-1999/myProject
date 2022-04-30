import { useEffect } from 'react'
import { useState } from 'react'
import { getDemandes } from '../API'
import Demmande from './demmande'
import './suivreAdmin.css'

export default () => {
  const [type, setType] = useState('changeSujet')
  const [list, setList] = useState([])
  const selectType = (e, type) => {
    document.querySelector('.selected').classList.remove('selected')
    e.target.classList.add('selected')
    setType(type)
  }

  useEffect(async () => {
    const data = await getDemandes(type)
    setList([...data])
  }, [type])

  return (
    <div className="listDemandes">
      <h3>List des demandes</h3>
      <div className="demmandesContent">
        <div className="listTypes">
          <span
            className="selected"
            onClick={(e) => selectType(e, 'changeSujet')}
          >
            Changement de Sujet
          </span>
          <span onClick={(e) => selectType(e, 'changebinom')}>
            Changement de Binome
          </span>
          <span onClick={(e) => selectType(e, 'Derogation')}>Derogation</span>
          <span onClick={(e) => selectType(e, 'compentation')}>
            Annuler Compensation
          </span>
          <span onClick={(e) => selectType(e, 'recorrection')}>
            Recorrection
          </span>
          <span onClick={(e) => selectType(e, 'ajouterModule')}>
            Ajoute Module
          </span>
          <span onClick={(e) => selectType(e, 'droitPfe')}>Droit PFE</span>
        </div>
        <div className="list">
          {list.map((item, index) => (
            <Demmande item={item} type={type} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
