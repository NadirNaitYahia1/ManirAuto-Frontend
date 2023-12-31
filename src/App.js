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
import AiBot from './components/bot/AiBot.jsx';
import Predict from './components/bot/Predict.jsx';


function App() {
  const [annonce,setAnnonce] =useState(
    {
      mark: '',
      model: '',
      annee: 0,
      energie: '',  
      couleur: '',
      kilometrage: 0,
      description: '',
      prix: 0,
      wilaya: '',
      puissanceFiscale: 0,
      boiteVitesse: 'automatique',
      nombrePortes:0,
      airbag: false,
      abs: false,
      climatisation: false,
      CDMP3Bluetooth: false,
      directionAssistee: false,
      photo: '',
    }
  )

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        
        <Routes>  
            <Route path="/"  element={<Pageuser />} /> 
            <Route path="/advertisement-detail" element={<AdvertisementDetail />} />
            <Route path="/login" element={<Connexion annonce={annonce} setAnnonce={setAnnonce}  />} />
            <Route path="/register" element={<Inscription2 />} />  
            <Route path="/add-announcement-1" element={<Annonce1 annonce={annonce} setAnnonce={setAnnonce}  />} />
            <Route path="/add-announcement-2" element={<Annonce2  annonce={annonce} setAnnonce={setAnnonce}  />} />
            <Route path="/add-announcement-3" element={<Annonce3   annonce={annonce} setAnnonce={setAnnonce}  />} />
            <Route path="/predict" element={ <Predict/>} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
