import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home/choisirreclamation')
  }

  return (
    <div className="home">
      <div className="section">
        <em>pour faire une reclamation cliquer ici</em>
        <button className="btn1 btn9" onClick={handleClick}>
          Reclamation
        </button>
      </div>
      <div className="section">
        <em>pour suivez votre dammande cliquer ici</em>
        <button
          className="btn2 btn9"
          onClick={() => navigate('/home/etudiant/suivre')}
        >
          Suivre
        </button>
      </div>
    </div>
  )
}

export default Home
