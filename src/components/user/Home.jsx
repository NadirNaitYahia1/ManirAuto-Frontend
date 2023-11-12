import React, { useState, useEffect } from "react";
import backgroundImage from "../../assets/home.png";
import { gsap } from "gsap";

const marques = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
const modeles = ["Sedan", "SUV", "Truck", "Convertible", "Hatchback"];
const annees = ["2023", "2022", "2021", "2020", "2019"];
const prixMax = ["10000", "20000", "30000", "40000", "50000"];

function Home() {
  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedModele, setSelectedModele] = useState("");
  const [selectedAnnee, setSelectedAnnee] = useState("");
  const [selectedPrixMax, setSelectedPrixMax] = useState("");
  const [searchText, setSearchText] = useState("");

  const toggleDropdown = (stateSetter) => {
    stateSetter((prevValue) => !prevValue);
  };

  const handleSearch = () => {
    console.log(
      `Searching for Marque: ${selectedMarque}, Modele: ${selectedModele}, Année: ${selectedAnnee}, Prix Max: ${selectedPrixMax}, Text: ${searchText}`
    );
  };

  useEffect(() => {
    gsap.fromTo(
      ".title",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      ".search-text",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      ".search-input",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      ".search-button",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div>
      <div
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "1171px 399px",
          backgroundRepeat: "no-repeat",
        
        }}
      >
        <div>
          <div
            className="p-10 text-left sm:text-center "
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <h1 className="text-5xl font-bold mb-2 text-white  sm:text-5xl sm:mb-4 p-24 title mt-6">
              Vous cherchez une <br />
              nouvelle voiture ?
            </h1>
          </div>
          <div
            className="p-2 text-center sm:text-left rounded-xl bg-white absolute mt-10"
            style={{
              width: "75%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex flex-row space-x-2">
              <div className="relative">
                <div
                  className={`border border-gray-300 p-2 cursor-pointer rounded ${
                    selectedMarque ? "bg-white" : ""
                  }`}
                  onClick={() => toggleDropdown(setSelectedMarque)}
                >
                  {selectedMarque ? (
                    <input
                      type="text"
                      placeholder="Rechercher une marque"
                      className="w-full border-b p-2 search-input"
                      value={selectedMarque}
                      onChange={(e) => setSelectedMarque(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedMarque)}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Rechercher une marque"
                      className="w-full border-b p-2 search-input"
                      value={selectedMarque}
                      onChange={(e) => setSelectedMarque(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedMarque)}
                    />
                  )}
                </div>
                {selectedMarque && (
                  <ul
                    className={`border border-gray-300 p-2 mt-2 absolute bg-white`}
                  >
                    {marques
                      .filter((marque) => marque.includes(selectedMarque))
                      .map((marque, mIndex) => (
                        <li
                          key={mIndex}
                          className="cursor-pointer hover-bg-gray-100 p-2"
                          onClick={() => setSelectedMarque(marque)}
                        >
                          {marque}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              <div className="relative">
                <div
                  className={`border border-gray-300 p-2 cursor-pointer rounded ${
                    selectedModele ? "bg-white" : ""
                  }`}
                  onClick={() => toggleDropdown(setSelectedModele)}
                >
                  {selectedModele ? (
                    <input
                      type="text"
                      placeholder="Rechercher un modèle"
                      className="w-full border-b p-2 search-input"
                      value={selectedModele}
                      onChange={(e) => setSelectedModele(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedModele)}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Rechercher un modèle"
                      className="w-full border-b p-2 search-input"
                      value={selectedModele}
                      onChange={(e) => setSelectedModele(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedModele)}
                    />
                  )}
                </div>
                {selectedModele && (
                  <ul
                    className={`border border-gray-300 p-2 mt-2 absolute bg-white`}
                  >
                    {modeles
                      .filter((modele) => modele.includes(selectedModele))
                      .map((modele, mIndex) => (
                        <li
                          key={mIndex}
                          className="cursor-pointer hover-bg-gray-100 p-2"
                          onClick={() => setSelectedModele(modele)}
                        >
                          {modele}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              <div className="relative">
                <div
                  className={`border border-gray-300 p-2 cursor-pointer rounded ${
                    selectedAnnee ? "bg-white" : ""
                  }`}
                  onClick={() => toggleDropdown(setSelectedAnnee)}
                >
                  {selectedAnnee ? (
                    <input
                      type="text"
                      placeholder="Rechercher une année"
                      className="w-full border-b p-2 search-input"
                      value={selectedAnnee}
                      onChange={(e) => setSelectedAnnee(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedAnnee)}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Rechercher une année"
                      className="w-full border-b p-2 search-input"
                      value={selectedAnnee}
                      onChange={(e) => setSelectedAnnee(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedAnnee)}
                    />
                  )}
                </div>
                {selectedAnnee && (
                  <ul
                    className={`border border-gray-300 p-2 mt-2 absolute bg-white`}
                  >
                    {annees
                      .filter((annee) => annee.includes(selectedAnnee))
                      .map((annee, aIndex) => (
                        <li
                          key={aIndex}
                          className="cursor-pointer hover-bg-gray-100 p-2"
                          onClick={() => setSelectedAnnee(annee)}
                        >
                          {annee}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              <div className="relative">
                <div
                  className={`border border-gray-300 p-2 cursor-pointer rounded ${
                    selectedPrixMax ? "bg-white" : ""
                  }`}
                  onClick={() => toggleDropdown(setSelectedPrixMax)}
                >
                  {selectedPrixMax ? (
                    <input
                      type="text"
                      placeholder="Rechercher un prix max"
                      className="w-full border-b p-2 search-input"
                      value={selectedPrixMax}
                      onChange={(e) => setSelectedPrixMax(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedPrixMax)}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Rechercher un prix max"
                      className="w-full border-b p-2 search-input"
                      value={selectedPrixMax}
                      onChange={(e) => setSelectedPrixMax(e.target.value)}
                      onBlur={() => toggleDropdown(setSelectedPrixMax)}
                    />
                  )}
                </div>
                {selectedPrixMax && (
                  <ul
                    className={`border border-gray-300 p-2 mt-2 absolute bg-white`}
                  >
                    {prixMax
                      .filter((prix) => prix.includes(selectedPrixMax))
                      .map((prix, pIndex) => (
                        <li
                          key={pIndex}
                          className="cursor-pointer hover-bg-gray-100 p-2"
                          onClick={() => setSelectedPrixMax(prix)}
                        >
                          {prix}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="border p-2 rounded m-2 search-input"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-purple-600 text-white p-2 rounded cursor-pointer m-2 search-button"
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;