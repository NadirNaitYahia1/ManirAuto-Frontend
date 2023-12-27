import React from 'react'
import Home from '../components/user/Home'
import AdvertisementViewerPage from '../components/user/AdvertisementViewerPage'
import Apropos from '../components/user/Apropos'
import data from '../data/data'
import { useState } from 'react'

export const context = React.createContext()

const Pageuser = () => {
  const [data, setData] = useState([]);

  return (
    <div className="container-fluid">
        <div className="row">
            <Home /> 
            <AdvertisementViewerPage  data={data} setData={setData}/>
            <Apropos />
        </div>
    </div>

  )
}

export default Pageuser