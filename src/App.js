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
import Choisir_recl from './components/choisir_reclamtion/Choisir_recl'
import AnullerCompensation from './components/choisir_reclamtion/GestionModules/AnullerCompensation'
import Suivre from './Suivre/Suivre'
import suivreAdmin from './SuivreAdmin/suivreAdmin'

import { AdmonLogin } from './components/admin/AdminLogin'
import { useEffect } from 'react'
import { getEtudiant, getLoginAdmin } from './API'
import Recorrection from './components/choisir_reclamtion/GestionNotes/Recorrection'
import SuivreAdmin from './SuivreAdmin/suivreAdmin'

const App = () => {
  const [logedIn, setLogedIn] = useState(
    window.sessionStorage.getItem('cne') && window.sessionStorage.getItem('cin')
      ? true
      : false
  )

  const [adminLogedIn, setAdminLogedIn] = useState(
    window.sessionStorage.getItem('email') &&
      window.sessionStorage.getItem('password')
      ? true
      : false
  )

  const [etudiant, setEtudiant] = useState({})

  useEffect(() => {
    ;(async () => {
      const etu = await getEtudiant(window.sessionStorage.getItem('cne'))
      setEtudiant(etu)
    })()
  }, [logedIn])

  return (
    <div className="App">
      <Router>
        <Header
          logedIn={logedIn}
          adminLogedIn={adminLogedIn}
          setLogedIn={setLogedIn}
          setAdminLogedIn={setAdminLogedIn}
        />
        <Routes>
          <Route
            exact
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
          />{' '}
          <Route
            path="/home/choisirreclamation/ajoutermodule"
            element={logedIn ? <AjouterModule /> : <Navigate to="/" />}
          />{' '}
          <Route
            path="/home/choisirreclamation/anullercompentation"
            element={logedIn ? <AnullerCompensation /> : <Navigate to="/" />}
          />{' '}
          <Route
            path="/home/choisirreclamation/changebinome"
            element={logedIn ? <ChangeBinom /> : <Navigate to="/" />}
          />
          <Route
            path="/home/choisirreclamation/changesujet"
            element={logedIn ? <ChangeSujet /> : <Navigate to="/" />}
          />
          <Route
            path="/home/choisirreclamation/demandedroitpfe"
            element={logedIn ? <DemandeDroitpfe /> : <Navigate to="/" />}
          />
          <Route
            path="/home/choisirreclamation/derogation"
            element={logedIn ? <Derogation /> : <Navigate to="/" />}
          />
          <Route
            path="/home/choisirreclamation/recorrection"
            element={logedIn ? <Recorrection /> : <Navigate to="/" />}
          />
          <Route
            path="/home/etudiant/suivre"
            element={
              logedIn ? <Suivre etudiant={etudiant} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/admin/suivre"
            element={adminLogedIn ? <SuivreAdmin /> : <Navigate to="/admin" />}
          />
          <Route path="/login" element={<Login setLogedIn={setLogedIn} />} />
          <Route
            path="/admin"
            element={<AdmonLogin setAdminLogedIn={setAdminLogedIn} />}
          ></Route>
          <Route path="/creecompte" element={<Creecompte />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
