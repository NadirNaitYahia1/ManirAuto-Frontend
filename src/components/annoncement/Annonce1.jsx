import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import AiBot from "../bot/AiBot.jsx";
import ChatbotPopup from "../bot/ChatbotPopup.jsx";
import { useNavigate } from "react-router-dom";
// Define your options arrays

const boiteOptions = [
  { value: "Manuelle", label: "Manuelle", id: "Manuelle" },
  { value: "Automatique", label: "Automatique", id: "Automatique" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "0px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  }),
  // Define other custom styles here
};
const Annonce1 = ({ annonce, setAnnonce,alert,setAlert }) => {
  const [isChatbotPopupVisible, setChatbotPopupVisible] = useState(false);

  const openChatbotPopup = () => {
    setChatbotPopupVisible(true);
  };

  const closeChatbotPopup = () => {
    setChatbotPopupVisible(false);
  };

  const handelSelectChange = async (e) => {
    setAnnonce({ ...annonce, [e.id]: e.value });
    console.log("data annonce1", annonce);
  };
  const handelChange = (e) => {
    setAnnonce({ ...annonce, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
          
            {alert &&(<div id="alert-3" class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div class="ms-3 text-sm font-medium">
    Annonce Ajouter avec succès 
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
  </button>
</div>)}

      <div className="text-center mt-5">
        <h1 className="text-4xl font-bold text-black mb-1 mt-14 sm:justify-center">
          Dites-nous les caractéristiques de base <br /> de votre voiture.
        </h1>
      </div>
      {/* Button (Annuler) in the top-right corner */}
      <div className="absolute top-0 right-0 p-4">
        <Link
          to="/"
          className="bg-purple-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
        >
          Annuler
        </Link>
      </div>
      <AiBot onChatbotClick={openChatbotPopup} />
      {/* Form in the center of the page */}
      <div className="w-full max-w-3xl p-1 mx-auto sm:justify-center">
        <form>
          <div className="p-4 space-y-4">
            {/* Marque (Dropdown) */}
            <div className="space-y-1 relative">
              <input
                type="text"
                id="mark"
                name="mark"
                placeholder="Marque"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow"
                onChange={handelChange}
              />
            </div>

 
            <div className="space-y-1 relative">
              <input
                type="text"
                id="model"
                name="model"
                placeholder="Modèle"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow"
                onChange={handelChange}
              />
            </div>
 
            <div className="space-x-4 flex">
              <div className="w-1/2 relative">
                <input
                  type="text"
                  id="annee"
                  name="annee"
                  placeholder="L'année"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow"
                  onChange={handelChange}
                />
              </div>

              <div className="w-1/2 relative">
                <input
                  type="text"
                  id="kilometrage"
                  name="kilometrage"
                  placeholder="Kilométrage"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow"
                  onChange={handelChange}
                />
              </div>
            </div>

 
            <div className="space-x-4 flex">
              <div className="w-1/2 relative">
                <input
                  type="text"
                  id="energie"
                  name="energie"
                  placeholder="Énergie"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow"
                  onChange={handelChange}
                />
              </div>

              <div className="w-1/2 relative">
                <Select
                  options={boiteOptions}
                  id="boite"
                  name="boite"
                  placeholder="Boite"
                  className="w-full p-2 text-sm text-gray-900 rounded shadow"
                  isSearchable={true}
                  styles={customStyles}
                  onChange={handelSelectChange}
                />
              </div>
            </div>

            {/* Couleur et Wilaya */}
            <div className="space-x-4 flex">
              <div className="w-1/2 relative">
                <input
                  type="text"
                  id="couleur"
                  name="couleur"
                  placeholder="Couleur"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow"
                  onChange={handelChange}
                />
              </div>

              <div className="w-1/2 relative">
                <input
                  type="text"
                  id="wilaya"
                  name="wilaya"
                  placeholder="Wilaya"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow"
                  onChange={handelChange}
                />
              </div>
            </div>
          </div>

 
          <div className="flex justify-center mt-3 space-x-4">
            <Link
              to="/loged/add-announcement-2"
              className="bg-purple-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
            >
              Suivant
            </Link>
          </div>
        </form>
      </div>
      {isChatbotPopupVisible && <ChatbotPopup onClose={closeChatbotPopup} />}
    </div>
  );
};

export default Annonce1;
