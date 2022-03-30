import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='section'>
        <em>pour faire une reclamation cliquer ici</em>
        <button className='btn1 btn'>Reclamation</button>
      </div>
      <div className='section'>
        <em>pour suivez votre dammande cliquer ici</em>
        <button className='btn2 btn'>Suivre</button>
      </div>
    </div>
  )
}

export default Home
