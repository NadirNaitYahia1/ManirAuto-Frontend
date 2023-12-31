// Predict.jsx
import React, { useState } from "react";

const Predict = () => {
  const [formData, setFormData] = useState({
    Marque: "",
    AnneeModele: "",
    Kilometrage: "",
    TypeCarburant: "",
    PuissanceFiscale: "",
    BoiteVitesses: "",
    NombrePortes: "",
    PremiereMain: "",
    Etat: "",
    Airbags: "",
    Climatisation: "",
    ABS: "",
    CDMP3Bluetooth: "",
    JantesAluminium: "",
  });

  const [predictions, setPredictions] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    } else {
      console.error("Erreur lors de l'envoi des données du formulaire");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/3 p-8 bg-white rounded shadow-md mt-96">
        <h1 className="text-2xl font-bold mb-5">Formulaire</h1>

        <form onSubmit={handleSubmit} className="flex flex-wrap">
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-4 w-1/2 px-2">
              <label className="text-sm mb-1">{key}</label>
              <input
                type={key === "AnneeModele" ? "number" : "text"}
                name={key}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
          ))}

          <div className="w-full flex justify-center mt-4">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded"
            >
              Soumettre
            </button>
          </div>
        </form>

        {predictions && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Prédictions :</h3>
            <p>Limite inférieure : {predictions[0]}</p>
            <p>Limite supérieure : {predictions[1]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
