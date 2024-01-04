// Footer.js

import React from "react";
import logo from "../../assets/logo.png";
import fbIcon from "../../assets/fb.png";
import instaIcon from "../../assets/insta.png";
import inIcon from "../../assets/in.png";
import xIcon from "../../assets/x.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-14">
        <h1 className="text-4xl font-bold mb-1">Contact us</h1>
        <div className="w-40 h-1 bg-purple-500 mb-8"></div>
      </div>

      <div className="bg-purple-300 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" className="w-28 h-auto ml-7" />{" "}
            <h6 className="ml-8">Votre voiture</h6>
            <h6>Votre Choix, notre platform</h6>
          </div>
          <div className="flex space-x-4 mt-auto">
            <a href="#" className="hover:text-gray-500">
              <img src={instaIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <img src={fbIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <img src={inIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <img src={xIcon} alt="X" className="w-6 h-6" />
            </a>
          </div>
          <div className="flex space-x-4 mt-auto">
            <a href="#" className="hover:text-gray-500">
              Sitemap
            </a>
            <a href="#" className="hover:text-gray-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
