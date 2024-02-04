import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AiBot from "../bot/AiBot.jsx";
import ChatbotPopup from "../bot/ChatbotPopup.jsx";
const Annonce2 = ({ annonce, setAnnonce,setAlert}) => {
  // const handelSelectChange = (e)=>{
  //   setAnnonce({...annonce,[e.id]:e.value})
  // }
  const [isChatbotPopupVisible, setChatbotPopupVisible] = useState(false);

  const openChatbotPopup = () => {
    setChatbotPopupVisible(true);
  };

  const closeChatbotPopup = () => {
    setChatbotPopupVisible(false);
  };
  const handelChange = (e) => {
    setAnnonce({ ...annonce, [e.target.id]: e.target.value });
    console.log("data annonce2", annonce);
  };
  useEffect(()=>{setAlert(false)},[])
  return (
    <div className="h-screen flex flex-col justify-center items-center">
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

      {/* Text in the middle of the page */}
      <div className="text-center mt-1">
        <h1 className="text-4xl font-bold text-black mb-1 mt-5">
          Décrivez votre véhicule et <br /> indiquez son prix
        </h1>
      </div>

      {/* Deux champs (Description et Prix) */}
      <div className="w-full max-w-3xl p-1 mx-auto mt-8">
        <form>
          <div className="p-4 space-y-4">
            {/* Description */}
            <div className="space-y-1">
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 h-32 shadow-md"
                onChange={handelChange}
              />
            </div>

            {/* Prix (Champ de texte) */}
            <div className="space-y-1">
              <input
                type="text"
                id="prix"
                name="prix"
                placeholder="Prix"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 shadow-md"
                onChange={handelChange}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Deux boutons (Retour et Suivant)  */}
      <div className="flex justify-between mt-8 space-x-4">
        <Link
          to="/loged/add-announcement-1"
          className="bg-gray-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
        >
          Retour
        </Link>
        <Link
          to="/loged/add-announcement-3"
          className="bg-purple-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
        >
          Suivant
        </Link>
      </div>
      {isChatbotPopupVisible && <ChatbotPopup onClose={closeChatbotPopup} />}
    </div>
  );
};

export default Annonce2;
