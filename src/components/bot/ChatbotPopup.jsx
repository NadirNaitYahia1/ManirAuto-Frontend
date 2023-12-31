import React, { useState, useRef, useEffect } from "react";

const ChatbotPopup = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    Marque: "",
    AnneeModele: "",
    Kilometrage: "",
    TypeCarburant: "Essence",
    BoiteVitesses: "Manuelle",
    PuissanceFiscale: "",
    NombrePortes: "",
    PremiereMain: "",
    Etat: "Très bon",
    Airbags: false,
    Climatisation: false,
    ABS: false,
    CDMP3Bluetooth: false,
    JantesAluminium: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      Marque: "",
      AnneeModele: "",
      Kilometrage: "",
      TypeCarburant: "Essence",
      BoiteVitesses: "Manuelle",
      PuissanceFiscale: "",
      NombrePortes: "",
      PremiereMain: "",
      Etat: "Très bon",
      Airbags: false,
      Climatisation: false,
      ABS: false,
      CDMP3Bluetooth: false,
      JantesAluminium: false,
    });
    onSubmit(); // Call the onSubmit function passed from Connexion
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
            <input
              type="text"
              name="Marque"
              value={formData.Marque}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
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
          <div className="mb-4 w-1/2 px-2">
            <label className="text-sm mb-1">Première Main</label>
            <input
              type="number"
              name="PremiereMain"
              value={formData.PremiereMain}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
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
