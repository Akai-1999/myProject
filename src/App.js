// import Derogation from './components/choisir_reclamtion/reclamation_possible/Derogation/Derogation'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./components/Login/Login";
import Creecompte from "./components/Creecompte/Creecompte";
import Derogation from "./components/choisir_reclamtion/Derogation]/derogation";
import ChangeBinom from "./components/choisir_reclamtion/DroitPfe/changeBinom";
import ChangeSujet from "./components/choisir_reclamtion/DroitPfe/ChangeSujet";
import DemandeDroitpfe from "./components/choisir_reclamtion/DroitPfe/DemandeDroitpfe";
import AjouterModule from "./components/choisir_reclamtion/GestionModules/AjouterModule";
import AnullerCompensation from "./components/choisir_reclamtion/GestionModules/AnullerCompensation";
import { AdmonLogin } from "./components/admin/AdminLogin";
import { useEffect } from "react";
import { getEtudiant } from "./API";
import { ReactSession } from "react-client-session";
import Recorrection from "./components/choisir_reclamtion/GestionNotes/Recorrection";
ReactSession.setStoreType("localStorage");

const App = () => {
  const [logedIn, setLogedIn] = useState(
    ReactSession.get("cin") && ReactSession.get("cne") ? true : false
  );
  const [etudiant, setEtudiant] = useState(null);

  useEffect(async () => {
    console.log(ReactSession.get("cne"));
    console.log(ReactSession.get("cin"));
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
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
          {/* <Route
            path="/home/choisirreclamation"
            element={logedIn ? <Choisir_recl /> : <Navigate to="/" />}
          /> */}
          {/* <Route
            path="/home/choisirreclamation/ajoutermodule"
            element={logedIn ? <AjouterModule /> : <Navigate to="/" />}
          /> */}
          <Route path="/login" element={<Login setLogedIn={setLogedIn} />} />

          {/* <Route
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
          /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
