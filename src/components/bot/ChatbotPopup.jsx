import React, { useState, useRef, useEffect } from "react";
import optionMarque from '../../api/marque_model.json'
const ChatbotPopup = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    Marque: "",
    Model:"",
    AnneeModele: "",
    Kilometrage: "",
    TypeCarburant: "Essence",
    BoiteVitesses: "Manuelle",
    PuissanceFiscale: "",
    NombrePortes: "4",
    PremiereMain: "3",
    Etat: "Très bon",
    Airbags: "true",
    Climatisation: "true",
    ABS: "true",
    CDMP3Bluetooth: "true",
    JantesAluminium: "true",
  });

  const [modelsOfMarque,setmodelsOfMarque]=useState([])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ?  checked.toString() : value
    }));
  };
  
  useEffect(() => {
    console.log('formData', formData);
  }, [formData]); 
  const [predictions, setPredictions] = useState(null);
  const [submited,setSubmited]=useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmited(true)
    setPredictions(null)
    // Utilize your own Django API URL
    const apiUrl = "http://localhost:8000/api/model/";


    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setPredictions(data);
      console.log(predictions);
    } else {
      console.error("Erreur lors de l'envoi des données du formulaire");
    }
  };

  const overlayRef = useRef(null);

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleMarqueChange = (e) => {
    const selectedMarque = e.target.value;
    const selectedMarqueData = optionMarque.find((item) => item.marque === selectedMarque);
    setmodelsOfMarque(selectedMarqueData ? selectedMarqueData.models : []);
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  ">
      <div
        ref={overlayRef}
        className="bg-white p-8 rounded shadow-md max-w-screen-md w-full max-h-screen overflow-y-auto"
      >
        <br />
        <br />

        <h6>
          <strong>Chatbot Form</strong>
        </h6>
        <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Marque</label>
            <select
              type="text"
              name="Marque"
              value={formData.Marque}
              onChange={(e) => {
                handleInputChange(e);
                handleMarqueChange(e);
              }}
              className="p-2 border border-gray-300 rounded w-full"
              required
            >
              {optionMarque.map((marque) => (
                <option key={marque.marque} value={marque.marque}>
                  {marque.marque}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Modele</label>
            <select
              type="text"
              name="Model"
              value={formData.Model}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            >
              {modelsOfMarque.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Année Modèle</label>
            <input
              type="number"
              name="AnneeModele"
              value={formData.AnneeModele}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Kilometrage</label>
            <input
              type="number"
              name="Kilometrage"
              value={formData.Kilometrage}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Type Carburant</label>
            <select
              name="TypeCarburant"
              value={formData.TypeCarburant}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            >
              <option value="Essence">Essence</option>
              <option value="Diesel">Diesel</option>
              <option value="GPL">GPL</option>
            </select>
          </div>
          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Boite Vitesses</label>
            <select
              name="BoiteVitesses"
              value={formData.BoiteVitesses}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            >
              <option value="Manuelle">Manuelle</option>
              <option value="Automatique">Automatique</option>
            </select>
          </div>
          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Puissance Fiscale</label>
            <input
              type="number"
              name="PuissanceFiscale"
              value={formData.PuissanceFiscale}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Nombre de Portes</label>
            <input
              type="number"
              name="NombrePortes"
              value={formData.NombrePortes}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          {/* <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Première Main</label>
            <input
              type="number"
              name="PremiereMain"
              value={formData.PremiereMain}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div> */}
          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">État</label>
            <select
              name="Etat"
              value={formData.Etat}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            >
              <option value="Très bon">Très bon</option>
              <option value="Excellent">Excellent</option>
              <option value="Bon">Bon</option>
              <option value="Pour Pièces">Pour Pièces</option>
              <option value="Endommagé">Endommagé</option>
            </select>
          </div>
          <div className="mb-4 w-1/2 px-2">
  <label className="text-sm mb-1">Airbags</label>
  <input
    type="checkbox"
    name="Airbags"
    checked={formData.Airbags}
    onChange={handleInputChange}
    className="border border-purple-500 rounded text-purple-500 focus:ring-purple-400 focus:border-purple-400"
  />
</div>
<div className="mb-4 w-1/2 px-2">
  <label className="text-sm mb-1">Climatisation</label>
  <input
    type="checkbox"
    name="Climatisation"
    checked={formData.Climatisation}
    onChange={handleInputChange}
    className="border border-purple-500 rounded text-purple-500 focus:ring-purple-400 focus:border-purple-400"
  />
</div>
<div className="mb-4 w-1/2 px-2">
  <label className="text-sm mb-1">ABS</label>
  <input
    type="checkbox"
    name="ABS"
    checked={formData.ABS}
    onChange={handleInputChange}
    className="border border-purple-500 rounded text-purple-500 focus:ring-purple-400 focus:border-purple-400"
  />
</div>
<div className="mb-4 w-1/2 px-2">
  <label className="text-sm mb-1">CD MP3 Bluetooth</label>
  <input
    type="checkbox"
    name="CDMP3Bluetooth"
    checked={formData.CDMP3Bluetooth}
    onChange={handleInputChange}
    className="border border-purple-500 rounded text-purple-500 focus:ring-purple-400 focus:border-purple-400"
  />
</div>
<div className="mb-1 w-1/2 px-2">
  <label className="text-sm mb-1">Jantes Aluminium</label>
  <input
    type="checkbox"
    name="JantesAluminium"
    checked={formData.JantesAluminium}
    onChange={handleInputChange}
    className="border border-purple-500 rounded text-purple-500 focus:ring-purple-400 focus:border-purple-400"
  />
</div>
          
        {!predictions && submited && (
          <div class="relative flex justify-center items-center ml-[40%]">
          <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  class="rounded-full h-28 w-28"/>
      </div>
        )}

          {predictions && (
                 <div className="w-full flex justify-center mt-4 bg-purple-300 p-4 rounded shadow-md ">
            <p className="text-mauve-900 font-bold mr-60 ">Prix min : {predictions[0]}</p>
            <p className="text-mauve-900 font-bold">Prix max : {predictions[1]} </p>
          </div>
          )}
     
          <div className="w-full flex justify-center mt-4">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPopup;
