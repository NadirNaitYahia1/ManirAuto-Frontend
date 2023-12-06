import React from 'react'
import './App.css'
import'./index.css'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Pageuser from './pages/Pageuser.jsx';
import AdvertisementDetail from './components/user/AdvertisementDetail.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Connexion from './components/login/Connexion.jsx';
import Inscription2 from "./components/registre/Inscription2.jsx";
import Annonce1 from "./components/annoncement/Annonce1.jsx";
import Annonce2 from "./components/annoncement/Annonce2.jsx";
import Annonce3 from "./components/annoncement/Annonce3.jsx";
import { useState } from 'react';



function App() {
  const [annonce,setAnnonce] =useState(
{    
    fileInput:'',
    prix:0,
    description:'',
    wilaya:'',
    couleur:'',
    boite:'',
    energie:'',
    kilometrage:0,
    annee:0,
    modele:"",
    marque:""}
  )
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>  
            <Route path="/"  element={<Pageuser />} /> 
            <Route path="/advertisement-detail" element={<AdvertisementDetail />} />
            <Route path="/login" element={<Connexion />} />
            <Route path="/register" element={<Inscription2 />} />  
            <Route path="/add-announcement-1" element={<Annonce1 annonce={annonce} setAnnonce={setAnnonce} />} />
            <Route path="/add-announcement-2" element={<Annonce2  annonce={annonce} setAnnonce={setAnnonce}  />} />
            <Route path="/add-announcement-3" element={<Annonce3   annonce={annonce} setAnnonce={setAnnonce} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
