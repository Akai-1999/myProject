import Choisir_recl from './components/choisir_reclamtion/Choisir_recl'
// import Derogation from './components/choisir_reclamtion/reclamation_possible/Derogation/Derogation'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { Login } from './components/Login/Login'
import Creecompte from './components/Creecompte/Creecompte'
import Derogation from './components/choisir_reclamtion/Derogation]/derogation'
import ChangeBinom from './components/choisir_reclamtion/DroitPfe/changeBinom'
import ChangeSujet from './components/choisir_reclamtion/DroitPfe/ChangeSujet'
import DemandeDroitpfe from './components/choisir_reclamtion/DroitPfe/DemandeDroitpfe'
import AjouterModule from './components/choisir_reclamtion/GestionModules/AjouterModule'
import AnullerCompensation from './components/choisir_reclamtion/GestionModules/AnullerCompensation'
import { AdmonLogin } from './components/admin/AdminLogin'
import { useEffect } from 'react'
import { getEtudiant } from './API'
import { ReactSession } from 'react-client-session'
import Recorrection from './components/choisir_reclamtion/GestionNotes/Recorrection'
ReactSession.setStoreType('localStorage')

function App() {
  const [logedIn, setLogedIn] = useState(false)
  const [etudiant, setEtudiant] = useState(null)

  useEffect(async () => {
    const cin = ReactSession.get('cin')
    const cne = ReactSession.get('cne')
    if (cin && cne) {
      const etu = await getEtudiant(cne)
      setEtudiant(etu)
      setLogedIn(false)
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              logedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/home"
            element={logedIn ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/home/choisirreclamation"
            element={logedIn ? <Choisir_recl /> : <Navigate to="/" />}
          />
          {/* <Route
            path="/home/choisirreclamation/ajoutermodule"
            element={logedIn ? <AjouterModule /> : <Navigate to="/" />}
          /> */}
          <Route
            path="/home/choisirreclamation"
            element={logedIn ? <Choisir_recl /> : <Navigate to="/" />}
          />
          <Route
            path="/home/choisirreclamation"
            element={logedIn ? <Choisir_recl /> : <Navigate to="/" />}
          />
          <Route
            path="/home/choisirreclamation"
            element={logedIn ? <Choisir_recl /> : <Navigate to="/" />}
          />
          <Route path="/login" element={<Login setLogedIn={setLogedIn} />} />

          <Route
            path="/home/choisirreclamation/recorrection"
            element={<Recorrection />}
          />
          <Route
            path="/home/choisirreclamation/ajoutermodule"
            element={<AjouterModule />}
          />
          <Route
            path="/home/choisirreclamation/anullercompentation"
            element={<AnullerCompensation />}
          />
          <Route
            path="/home/choisirreclamation/changebinome"
            element={<ChangeBinom />}
          />
          <Route
            path="/home/choisirreclamation/changesujet"
            element={<ChangeSujet />}
          />
          <Route
            path="/home/choisirreclamation/demandedroitpfe"
            element={<DemandeDroitpfe />}
          />
          <Route
            path="/home/choisirreclamation/derogation"
            element={<Derogation />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
