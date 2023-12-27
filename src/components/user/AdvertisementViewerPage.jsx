import React from 'react'
import AdvertisementViewer from './AdvertisementViewer'
import Filter from './Filter'
const AdvertisementViewerPage = ({data,setData}) => {
  return (
    <div className="flex w-full h-full ">
      <Filter data={data} setData={setData}/>
      <AdvertisementViewer  data={data} setData={setData}/>
    </div>
  )
}

export default AdvertisementViewerPage