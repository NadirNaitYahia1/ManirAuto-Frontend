import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { api } from "../../api/api.js";
import AiBot from "../bot/AiBot.jsx";
import ChatbotPopup from "../bot/ChatbotPopup.jsx";
import { useNavigate } from "react-router-dom";

const Annonce3 = ({ annonce, setAnnonce, owner,alert,setAlert }) => {
  const [isChatbotPopupVisible, setChatbotPopupVisible] = useState(false);
  const navigate = useNavigate();

  const openChatbotPopup = () => {
    setChatbotPopupVisible(true);
  };

  const closeChatbotPopup = () => {
    setChatbotPopupVisible(false);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setAnnonce({ ...annonce, [e.target.id]: e.target.value });
    console.log("data annonce 3", annonce);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    setAlert(true)
    navigate("/loged/add-announcement-1");
    

    try {
      const response = await api.addCar(annonce);
      console.log(response.status);

      if (response.status === 200) {
        console.log("Success!");
        navigate("/loged/add-announcement-1");
      } else {
        console.error("Error:", response.statusText);
        // Handle the error, show a message to the user, etc.
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

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
        <h1 className="text-4xl font-bold text-black mb-1 mt-1">
          Importez les photos <br />
          de votre véhicule
        </h1>
      </div>

      {/* File Upload Input and Photos Container */}
      <div className="w-full max-w-3xl p-1 mx-auto mt-8">
        <div className="p-4 space-y-4">
          <div className="w-2/3 mx-auto">
            <div
              className={`border-2 border-gray-500 rounded-md p-2  ${
                selectedFiles.length === 0 ? "h-48" : ""
              }`}
            >
              <label
                htmlFor="fileInput"
                className={`bg-purple-500 text-white p-4 rounded w-1/3 text-center cursor-pointer hover:bg-purple-700 ${
                  selectedFiles.length === 0
                    ? "ml-auto mr-auto mt-12 mb-auto flex items-center justify-center sm:items-center"
                    : ""
                }`}
              >
                {selectedFiles.length === 0
                  ? "Ajoutez les photos"
                  : "Modifier les photos"}
              </label>

              <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept="image/*"
                onChange={handleFileUpload}
                multiple
                className="hidden"
              />
              <div className="grid grid-cols-3 gap-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="w-full h-24">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Image ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deux boutons (Retour et Suivant)  */}
      <div className="flex justify-center mt- space-x-4">
        <Link
          to="/loged/add-announcement-2"
          className="bg-gray-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
        >
          Retour
        </Link>
        {/* <Link
          to="/annonce2"
          className="bg-gray-500 text-white p-3 rounded bg-purple-500 hover:bg-purple-700 no-underline"
        >
          Ajouter 
        </Link> */}

        <button
          className="bg-gray-500 text-white p-3 rounded bg-purple-500 hover:bg-purple-700 no-underline"
          type="submit"
          onClick={handelSubmit}
        >
          Ajouter
        </button>
      </div>
      {isChatbotPopupVisible && <ChatbotPopup onClose={closeChatbotPopup} />}
    </div>
  );
};

export default Annonce3;
