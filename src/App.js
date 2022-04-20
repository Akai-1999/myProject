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
import Recorrection from "./components/choisir_reclamtion/GestionNotes/Recorrection";

const App = () => {
  const [logedIn, setLogedIn] = useState(
    window.sessionStorage.getItem("cne") && window.sessionStorage.getItem("cin")
      ? true
      : false
  );
  const [etudiant, setEtudiant] = useState(null);

  useEffect(() => {
    console.log(window.sessionStorage.getItem("cne"));
    console.log(window.sessionStorage.getItem("cin"));
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
          <Route path="/login" element={<Login setLogedIn={setLogedIn} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
