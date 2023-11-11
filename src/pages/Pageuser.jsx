import React from 'react'
import Home from '../components/user/Home'
import AdvertisementViewerPage from '../components/user/AdvertisementViewerPage'
import Apropos from '../components/user/Apropos'
import data from '../data/data'

export const context = React.createContext()

const Pageuser = () => {
  return (
    <div className="container-fluid">
        <div className="row">
          <context.Provider value={{data}}>
            <Home /> 
            <AdvertisementViewerPage />
            <Apropos />
          </context.Provider> 
        </div>
    </div>

  )
}

export default Pageuser