import React, { useState, useEffect } from 'react';
import imgPhone from '../../assets/Phone.png';
import imgCar from '../../assets/car.png';

const AdvertisementViewer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } 
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data.length) {
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

  return (
    <div className='cars mx-auto mt-5 md:ms-4 basis-4/5'>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-3'>
        {currentData.map((car, index) => (
          <div key={index} className='shadow-[0px_2px_3px_0px_#7A63F0] pb-4 rounded-[15px] border border-solid border-gray-300 border-opacity-80'>
            <img src={imgCar} alt='img-car' className='mt-3 mx-auto' />

            <div className='flex justify-between mt-3'>
              <p className='mx-3 text-base font-normal tracking-normal'>{car.name} {car.model}</p>
              <p className='mx-14 text-priceColorText text-base font-semibold tracking-normal'>{car.price}M</p>
            </div>

            <div className='mt-1 mx-3'>
              <p className='text-phoneColorText text-base font-normal tracking-normal'>{car.km}Km</p>
            </div>

            <div className='mt-4 flex items-center justify-between mx-2'>
              <div className='flex items-center'>
                <img src={imgPhone} alt='img-phone' className='h-10 w-10' />
                <p className='text-phoneColorText text-base font-normal tracking-normal'>{car.phone}</p>
              </div>
              <button className='bg-userButton rounded-[15px] px-5 py-3 text-userButtonText hover:bg-blue-800'>Voir Plus</button>
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
