import React from 'react'
import imgAudi from '../../assets/audi.png'
import imgLexus from '../../assets/lexus.png'
import imgMerc from '../../assets/mercedes-benz.png'

const Filter = () => {
  return (
  <div className=" basis-1/5 mx-auto w mt-5 h-full hidden sm:block ">
    <div className="mt-10 container  rounded-[15px] w-[90%] mx-auto bg-gradient-custom-filter1 pb-12 ">
      
      <p className='text-center title-filter'>Plus de Filtres</p>
      
      <div className='line mt-3'></div>

      <p className='titleFeatures-filter ml-4'>Wilaya</p>
      
      <div className='wilaya'>
      </div>

      <div className='line mt-3'></div>

      {/* ------------------------------------------------------------ */}
      <p className='titleFeatures-filter ml-4 '>Energie</p>
      <div className="Energie ml-4">

        <div className='flex'>
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="label ms-5">Essence</label>
        </div>
        
        <div className='flex'>
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="label ms-5">Diesel</label>
        </div>
        
        <div className='flex'>
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="label ms-5">GPL</label>
        </div>

      </div>

      <div className='line mt-3'></div>
      
      
      {/* ------------------------------------------------------------ */}
      <p className='titleFeatures-filter ml-4'>Couleur</p>
      
      <div className='couleur'>
      </div>

      <div className='line mt-3'></div>

      {/* ------------------------------------------------------------ */}
      <p className='titleFeatures-filter ml-4'>Boite</p>
      
      <div className='boite ml-4'>
      
        <div className='flex'>
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="label ms-5">Default checkbox</label>
        </div>
      
        <div className='flex'>
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="label ms-5">Default checkbox</label>
        </div>
       
        <div className='flex'>
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="default-checkbox" class="label ms-5">Default checkbox</label>
        </div>
      </div>

      <div className='line mt-3'></div>

      {/* ------------------------------------------------------------ */}

      <p className='titleFeatures-filter ml-4  '>Prix</p>
    
      <div className='prix '>
      <div className='flex items-center mx-auto'>
          <label for="default-checkbox" class="label ml-2">De</label>
          <input type="text" placeholder='  Min  ' className='h-6 w-12 rounded-md ml-2' />
          <label for="default-checkbox" class="label ml-2">a</label>
          <input type="text" placeholder='  Max  ' className='h-6 w-12 rounded-md ml-2' />
      </div>
      </div>



    </div>

    <div className="mt-12 container rounded-[15px] w-[90%]  mx-auto bg-gradient-custom-filter2 items-center">
      <p className='text-center title-filter2 mb-3 mt-2'>Top 3 marque les plus <br/>vendues</p>
      <div className='line mt-3'></div>
 
      <img src={imgAudi} alt="img-audi" className='mx-auto py-3' />
     
      <div className='line mt-3'></div>

      <img src={imgLexus} alt="img-lexus" className='mx-auto py-3' />      

      <div className='line mt-3'></div>

      <img src={imgMerc} alt="img-merc" className='mx-auto py-3' />


    </div>
    
  </div>
  )
}

export default Filter