import { type } from '@testing-library/user-event/dist/type'
import { useState } from 'react'
import { useEffect } from 'react'
import './demande.css'
import { changeStatus, getEtudiant, deleteStatus } from '../API'

export default ({ item, type }) => {
  const [etudiant, setEtudiant] = useState({})
  const generateDate = (date) => {
    return date ? `${date.slice(8, 10)}/${date.slice(5, 7)}` : ''
  }

  const generateName = (nom) => {
    return nom ? nom.toUpperCase() : ''
  }
  const acceptDemande = async () => {
    await changeStatus(type, item._id, 'accepter')
  }
  const refuserDemande = async () => {
    await changeStatus(type, item._id, 'refuser')
  }
  const deleteDemande = async () => {
    await deleteStatus(type, item._id)
  }

  useEffect(async () => {
    console.log(item)
    const res = await getEtudiant(item.cneEtudiant)
    setEtudiant(res)
  }, [])

  return (
    <div className="item-demande">
      <em>{generateDate(item.date)}</em>
      {/* <em>{generateName(etudiant.nom)}</em>
      <em>{generateName(etudiant.prenom)}</em> */}
      <em>
        {type == 'ajouterModule'
          ? item.nomModule
          : type == 'changeSujet'
          ? item.textarea
          : type == 'changebinom'
          ? generateName(item.nomBinom) +
            ' ' +
            generateName(item.prenomBinom) +
            ' ' +
            generateName(item.cneBinome)
          : type == 'Derogation'
          ? item.annee
          : type == 'recorrection'
          ? item.nomModule
          : ''}
      </em>
      <em>{item.status}</em>
      <em>
        <a href=""></a>
      </em>

      <em>
        <a href=""></a>
      </em>

      <em>
        <a href="">
          <i class="fa-solid fa-trash-can" onClick={deleteDemande}></i>
        </a>
      </em>
    </div>
  )
}
