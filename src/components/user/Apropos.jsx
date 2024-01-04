import React from "react";
import "./About.css"; // Importez votre fichier CSS pour le style
import aboutImg from "../../assets/about.png";
import icon from "../../assets/icon.png";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">A propos</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="purple-rectangle">
          <p className="sentence">
            <img src={icon} alt="Icon" className="check-icon" />
            Trouvez la voiture de vos rêves chez nous.
          </p>
          <p className="sentence">
            <img src={icon} alt="Icon" className="check-icon" />
            Vendez votre voiture en toute simplicité.
          </p>
          <p className="sentence">
            <img src={icon} alt="Icon" className="check-icon" />
            Estimez la valeur de votre voiture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
