import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import logo from "../../assets/logo.png";

// Define your options arrays
const marqueOptions = [
  { value: "marque1", label: "Marque 1",id:"marque" },
  { value: "marque2", label: "Marque 2",id:"marque"},
  { value: "marque3", label: "Marque 3",id:"marque" },
  // Add more options for marque here
];

const modeleOptions = [
  { value: "modele1", label: "Modèle 1",id:"modele" },
  { value: "modele2", label: "Modèle 2",id:"modele" },
  { value: "modele3", label: "Modèle 3",id:"modele"},
  // Add more options for modèle here
];

const energieOptions = [
  { value: "diesel", label: "diesel",id:"diesel" },
  { value: "Essance", label: "Essance",id:"Essance" },
  { value: "Gpl", label: "Gpl",id:"Gpl"},
  // Add more options for énergie here
];

const boiteOptions = [
  { value: "boite1", label: "Boite 1",id:"boite" },
  { value: "boite2", label: "Boite 2",id:"boite"  },
  { value: "boite3", label: "Boite 3",id:"boite"  },
  // Add more options for boite here
];

const couleurOptions = [
  { value: "couleur1", label: "Couleur 1",id:"couleur" },
  { value: "couleur2", label: "Couleur 2",id:"couleur"},
  { value: "couleur3", label: "Couleur 3",id:"couleur" },
  // Add more options for couleur here
];

const wilayaOptions = [
  { value: "Batna", label: "Batna" ,id:"wilaya"},
  { value: "Batna", label: "Batna" ,id:"wilaya"},
  { value: "Batna", label: "Batna" ,id:"wilaya"},
  // Add more options for wilaya here
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
const Annonce1 = ({annonce,setAnnonce}) => {
  
  const handelSelectChange = async(e)=>{
    setAnnonce({...annonce,[e.id]:e.value})
    console.log('data annonce1',annonce)
  }
  const handelChange = (e)=>{
    setAnnonce({...annonce,[e.target.id]:e.target.value})
 
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Logo in the top-left corner */}


      {/* Text in the middle of the page */}
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

            {/* Modèle (Dropdown avec recherche) */}
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

            {/* L'année et Kilométrage */}
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

            {/* Énergie et Boite */}
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

          {/* Deux boutons (Retour et Suivant) */}
          <div className="flex justify-center mt-3 space-x-4">

            <Link
              to="/add-announcement-2"
              className="bg-purple-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
            >
              Suivant
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Annonce1;



