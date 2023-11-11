import React from 'react'
import AdvertisementViewer from './AdvertisementViewer'
import Filter from './Filter'
const AdvertisementViewerPage = () => {
  return (
    <div className="flex w-full h-full ">
      <Filter />
      <AdvertisementViewer />
    </div>
  )
}

export default AdvertisementViewerPage