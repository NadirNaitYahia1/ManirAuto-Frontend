import React, { useState, useEffect } from 'react';
import imgPhone from '../../assets/Phone.png';
import { useNavigate } from 'react-router-dom';
 

const AdvertisementViewer = ({data,setData}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();



  useEffect(() => {
    console.log(data)
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getCars/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log('data',result)
      } catch (error) {
        setError(error);
      } 
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data?.length) {
    return <p>Loading...</p>;
  }

  const numberElement = 9;
  const lengthData = data.length;
  const nbrPage = Math.ceil(lengthData / numberElement);
  const lastIndex = currentPage * numberElement;
  const firstIndex = lastIndex - numberElement;
  const currentData = data.slice(firstIndex, lastIndex);
  const numbers = [...Array(nbrPage + 1).keys()].slice(1);

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < nbrPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  
  const pathDettails = (id)=>{
    navigate(`/advertisement-detail/${id}`)
  }

  return (
    <div className='cars mx-auto mt-5 md:ms-4 basis-4/5'>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-3'>
        {currentData.map((car, index) => (
          <div key={index} className='shadow-[0px_2px_3px_0px_#7A63F0] pb-4 rounded-[15px] border border-solid border-gray-300 border-opacity-80'>
            {/* <img src={require(car.image)} alt='img-car' className='mt-3 mx-auto w-200' /> */}
            <div className='flex justify-between mt-3'>
              <p className='mx-auto text-base font-bold tracking-normal '>{car.mark} {car.model}</p>
         
            </div>

            <div className='flex justify-between mt-3 mx-3'>
              <p className='mx-auto text-base font-normal tracking-normal '>{car.description}</p>
            </div>
            <div className='flex justify-between mt-3 mx-3'>
              <p className=' text-priceColorText text-base font-bold tracking-normal'>{car.prix} millions</p>
            </div>

            <div className='mt-1 mx-3'>
              <p className='text-phoneColorText text-base font-bold tracking-normal'>{car.kilometrage}Km</p>
            </div>
            
            <div className="mt-1 mx-3">
                <p className='text-phoneColorText text-base font-normal tracking-normal'>{car.wilaya}</p>
              </div>

            <div className='options'> 
              { car.airbag &&    
              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>airbag</p>
              </div>}
              { car.climatisation &&    
              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>climatisation</p>
              </div>}

              { car.nombrePortes > 0 &&    
              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>{car.nombrePortes}</p>
              </div>}

              { car.puissanceFiscale > 0 &&    
              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>{car.puissanceFiscale}</p>
              </div>}
              
              { car.energie !=='' &&    
              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>{car.energie}</p>
              </div>}

              { car.couleur !=='' &&    
              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>{car.couleur}</p>
              </div>}
              { car.abd  &&    
              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>abs</p>
              </div>}

              <div className='mt-1 mx-3'>
                <p className='text-phoneColorText text-base font-normal tracking-normal '>{car.boiteVitesse}</p>
              </div>


              
  
              
 



            </div>


            <div className='mt-4 flex items-center justify-between mx-2'>
              <div className='flex items-center'>
                <img src={imgPhone} alt='img-phone' className='h-10 w-10' />
                <p className='text-phoneColorText text-base font-normal tracking-normal'>{car.phone}</p>
              </div>



              <button className='bg-userButton rounded-[15px] px-5 py-3 text-userButtonText hover:bg-blue-800' onClick={()=>pathDettails(car.idCar)}>Voir Plus</button>
            </div>
          </div>
        ))}
      </div>


      <div className='pagination flex justify-center mt-5'>
        <button className='button-pagination-prev-next button-pagination' onClick={prev}>
          Prev
        </button>

        {numbers.map((number, index) => (
          <button key={index} className='mx-1 button-pagination' onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}

        <button className='button-pagination-prev-next button-pagination' onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AdvertisementViewer;
