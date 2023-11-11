import React from 'react'
import './App.css'
import'./index.css'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Pageuser from './pages/Pageuser.jsx';
 
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>  
            <Route path="/"  Component={Pageuser}/>
        </Routes>
    </Router>

    </div>
    )
}

export default App