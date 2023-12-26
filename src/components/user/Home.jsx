// Home.js

import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="title">
        Vous cherchez une <br />
        nouvelle voiture ?{" "}
      </h1>

      <div className="search-bar">
        <select>
          <option value="" disabled>
            Marque
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select>
          <option value="" disabled>
            Modèle
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select>
          <option value="" disabled>
            Année
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <input type="text" placeholder="Recherche..." />
        <button>Rechercher</button>
      </div>
    </div>
  );
}

export default Home;
