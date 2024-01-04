import React, { useEffect, useState } from "react";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import detailImage from "../../assets/detail.png";
import phone from "../../assets/Phone.png";
import AiBot from "../bot/AiBot"; // Assurez-vous d'importer le composant AiBot correctement
import ChatbotPopup from "../bot/ChatbotPopup";
import { api } from "../../api/api";


const CarDetails = () => {


  useEffect(() => {
    // get id from url
    const id = parseInt(window.location.pathname.split("/")[2]);
    const fetchData = async () => {
      try {
        const response = await api.GetCarById((id));  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error during fetch cars:", error);
      }
    };
  
    fetchData(); 
  
  }, []);  
  

  const carData = {
    phoneNumber: "123-456-7890",
    price: "$25,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      couleur: "Blue",
      annee: 2022,
      boite: "Automatic",
      energie: "Petrol",
      moteur: "V6",
      modele: "Sedan",
      marque: "Toyota",
      kilometrage: "30,000 miles",
    },
    options: {
      moteur: "AC",
      modele: "Leather seats",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isChatbotPopupVisible, setChatbotPopupVisible] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => ((prevSlide - 2 + 3) % 3) + 1);
  };
  const handleChatbotClick = () => {
    setChatbotPopupVisible(true);
  };

  const handleCloseChatbotPopup = () => {
    setChatbotPopupVisible(false);
  };
   
  return (
    <div>
      <br />
      <br />
      <br />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-2 relative">
          <h1 className="text-2xl font-bold mb-4 text-black">
            <strong>Audi Q3 2020 S Line</strong>
          </h1>

          <img
            src={currentSlide === 1 ? pic1 : currentSlide === 2 ? pic2 : pic3}
            alt={`Car Slide ${currentSlide}`}
            className="w-full object-cover rounded"
          />

          {/* Ajoutez AiBot ici */}

          <div className="relative flex items-center justify-center py-2 md:py-5 px-2 md:px-7">
            <div className="flex">
              <button
                onClick={handlePrevSlide}
                className="text-white bg-gray-800 px-6 md:px-14 rounded"
              >
                Prev
              </button>
              <button
                onClick={handleNextSlide}
                className="text-white bg-gray-800 px-6 md:px-14 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 p-8 relative"
          style={{
            backgroundImage: `url(${detailImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="bg-gray-200 bg-opacity-50 backdrop-blur-md p-4 rounded-md relative text-black"
            style={{
              borderRadius: "10px",
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-center mb-4 md:mb-0">
                <img src={phone} alt="Phone Icon" className="mr-2" />
                <p className="text-sm">
                  <strong>Phone Number:</strong> {carData.phoneNumber}
                </p>
              </div>
              <AiBot onChatbotClick={handleChatbotClick} />
              <div className="text-purple-700 font-bold">
                <p>{carData.price}</p>
              </div>
            </div>
            <div className="border-b my-4 border-gray-500"></div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Description</h1>
              <p>{carData.description}</p>
            </div>
            <div className="border-b my-4 border-gray-500"></div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Details</h1>
              <div className="flex flex-wrap">
                {Object.entries(carData.details).map(([key, value]) => (
                  <div key={key} className="w-full md:w-1/4 mb-4">
                    <strong>{key}</strong>: {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-b my-4 border-gray-500"></div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Car Options</h1>
              <div className="flex flex-wrap">
                {Object.entries(carData.options).map(([key, value]) => (
                  <div key={key} className="w-full md:w-1/4 mb-4">
                    <strong>{key}</strong>: {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isChatbotPopupVisible && (
        <ChatbotPopup onClose={handleCloseChatbotPopup} />
      )}
    </div>
  );
};

export default CarDetails;
