import React from 'react'
import './App.css'
import'./index.css'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Pageuser from './pages/Pageuser.jsx';
import AdvertisementDetail from './components/user/AdvertisementDetail.jsx'
import Navbar from './components/user/Navbar.jsx'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>  
            <Route path="/"  Component={Pageuser}/>
            <Route path="/de"  Component={AdvertisementDetail}/>
        </Routes>
    </Router>

    </div>
    )
}

export default App