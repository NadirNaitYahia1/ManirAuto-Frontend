import React, { useEffect } from 'react'
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
import PrivateRoutes, { Redirect } from './utils/utils.js'
import AdvertisementViewerLoged from './components/logedUser/AdvertisementViewerLoged.jsx';
import NavbarLoged from './components/Navbar/NavbarLoged.jsx';


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

    

  const [loged,setLoged]=useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
        setLoged(true)
    }
    else{
        setLoged(false)
      }
} 
, [])

  return (
    <div className='App'>
      <Router>
        {
        !loged ? <Navbar loged={loged}/> : <NavbarLoged/>  
        }
        
        <Routes>  
            <Route path="/"  element={<Pageuser />} /> 
            <Route path="/advertisement-detail/:id" element={<AdvertisementDetail />} />
              <Route path="/login" element={<Connexion annonce={annonce} setAnnonce={setAnnonce}  loges={loged} setLoged={setLoged} />} />}
              <Route path="/register" element={<Inscription2 />} />  
              <Route path="loged/mes-annonces" element={<AdvertisementViewerLoged/>} />
              <Route path="/loged/add-announcement-1" element={<Annonce1 annonce={annonce} setAnnonce={setAnnonce}  />} />
              <Route path="/loged/add-announcement-2" element={<Annonce2  annonce={annonce} setAnnonce={setAnnonce}  />} />
              <Route path="/loged/add-announcement-3" element={<Annonce3   annonce={annonce} setAnnonce={setAnnonce}  />} />
            {/* </Route> */}
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
