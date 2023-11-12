import React from 'react'
import { useState } from 'react'
import imgPhone from '../../assets/Phone.png'

const AdvertisementDetail = () => {
    
    const nbrPage = 3
    
 
    const [currentPage, setCurrentPage] = useState(1)
    const numbers = [...Array(nbrPage + 1).keys()].slice(1);
    const prev = () => {
        if( currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }

    }

    const next = () => {
        if (currentPage < nbrPage) {
            setCurrentPage(currentPage + 1)
        }
    }
  return (
    <div className='grid md:grid-cols-2  sm:grid-cols-1 h-screen '>
        <div className='  h-screen '>
            <p className='title-filter ms-4'>Audi Q3 2020 S Line</p>
            <img src='https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801' alt='car' className='mx-auto border ' />
            
            <div className='pagination flex  justify-center mt-5  '>
              <button className='button-pagination-prev-next button-pagination ' onClick={prev}>
                    Prev
                </button>   
            
    
            {
                numbers.map((number, index) => {
                    return <button key={index} className='mx-1 button-pagination button-pagination ' onClick={()=>setCurrentPage(number)}>{number}</button>
                })
            }
            
            
                <button className='button-pagination-prev-next button-pagination' onClick={next}>
                    Next
                </button>
        
            </div>

        </div>

        <div className='col2 h-screen'>
            <div className="container rounded-[50px] bg-red-50 mx-auto my-10">
                <div className='flex justify-around items-center '>
                    <div className='flex items-center   '>
                        <div className='flex items-center'>
                            <img src={imgPhone} alt="img-phone" className='h-10 w-10' />
                            <p className='text-phoneColorText  text-base font-normal tracking-normal'>077373737373</p>
                        </div>
                    </div>
                    
                    <div>                       
                             <p>800M</p>
                    </div>

                
                </div>
              
                <div className='line mt-3'></div>

                <p className='ms-5'>Description</p>
                
                <div className='line mt-3'></div>   

                



            </div>
      
        </div>
    </div>
    
  )
}

export default AdvertisementDetail