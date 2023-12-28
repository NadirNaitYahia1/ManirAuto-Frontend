import React, { useState } from 'react';

const Predict = () => {
  const [formData, setFormData] = useState({
    Marque: '',
    AnneeModele: '',
    Kilometrage: '',
    TypeCarburant: '',
    PuissanceFiscale: '',
    BoiteVitesses: '',
    NombrePortes: '',
    PremiereMain: '',
    Etat: '',
    Airbags: '',
    Climatisation: '',
    ABS: '',
    CDMP3Bluetooth: '',
    JantesAluminium: '',
  });

  const [predictions, setPredictions] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Utilisez votre propre URL de l'API Django
    const apiUrl = 'http://localhost:8000/api/model/';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
      },
      body: JSON.stringify(formData),  
    });

    if (response.ok) {
      const data = await response.json();
      setPredictions(data);
    } else {
      console.error('Erreur lors de l\'envoi des données du formulaire');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  return (
    <div className='mt-[90px]'>
      <h1>Formulaire</h1>

      <form onSubmit={handleSubmit}>
      

        <label>Annee Modele</label>
        <input  type="number"/>


        <label>Annee Modele</label>
        <input type="number" name="AnneeModele" onChange={handleInputChange} />
        <label>Marque</label>
        <input type="text" name="Marque" onChange={handleInputChange} />

        <label>Kilometrage</label>
        <input type="number" name="Kilometrage" onChange={handleInputChange} />

        <label>Type Carburant</label>
        <input type="text" name="TypeCarburant" onChange={handleInputChange} />

        <label>Puissance Fiscale</label>
        <input type="number" name="PuissanceFiscale" onChange={handleInputChange} />

        <label>Boite Vitesses</label>
        <input type="text" name="BoiteVitesses" onChange={handleInputChange} />

        <label>Nombre Portes</label>
        <input type="number" name="NombrePortes" onChange={handleInputChange} />

        <label>Premiere Main</label>
        <input type="text" name="PremiereMain" onChange={handleInputChange} />

        <label>Etat</label>
        <input type="text" name="Etat" onChange={handleInputChange} />

        <label>Airbags</label>
        <input type="text" name="Airbags" onChange={handleInputChange} />

        <label>Climatisation</label>
        <input type="text" name="Climatisation" onChange={handleInputChange} />

        <label>ABS</label>
        <input type="text" name="ABS" onChange={handleInputChange} />

        <label>CDMP3Bluetooth</label>
        <input type="text" name="CDMP3Bluetooth" onChange={handleInputChange} />

        <label>Jantes Aluminium</label>
        <input type="text" name="JantesAluminium" onChange={handleInputChange} />

        <button type="submit">Soumettre</button>
      </form>

      {predictions && (
        <div>
          <h3>Prédictions :</h3>
          <p>Limite inférieure : {predictions[0]}</p>
          <p>Limite supérieure : {predictions[1]}</p>
        </div>
      )}
    </div>
  );
};

export default Predict;
