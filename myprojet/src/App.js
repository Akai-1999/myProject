import Choisir_recl from './components/choisir_reclamtion/Choisir_recl'
import Derogation from './components/choisir_reclamtion/reclamation_possible/Derogation/Derogation'
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

function App() {
  const [logedIn, setLogedIn] = useState(false)

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route
            exact
            path="/"
            element={
              logedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login logedIn={logedIn} setLogedIn={setLogedIn} />
              )
            }
          />
          <Route path="/creecompte" element={<Creecompte />} />
        </Routes>
      </Router>

      {/* <Login /> <Header /> */}
      {/*<Home />*/}
      {/* <Choisir_recl />*/}
      {/*<Derogation />*/}
    </div>
  )
}

export default App
