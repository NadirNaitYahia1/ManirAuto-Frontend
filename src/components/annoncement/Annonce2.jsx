import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Select from "react-select"; // Import de React Select

const Annonce2 = () => {
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
              />
            </div>
          </div>
        </form>
      </div>

      {/* Deux boutons (Retour et Suivant)  */}
      <div className="flex justify-between mt-8 space-x-4">
        <Link
          to="/annonce1"
          className="bg-gray-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
        >
          Retour
        </Link>
        <Link
          to="/add-announcement-3"
          className="bg-purple-500 text-white p-3 rounded hover:bg-purple-700 no-underline"
        >
          Suivant
        </Link>
      </div>
    </div>
  );
};

export default Annonce2;
