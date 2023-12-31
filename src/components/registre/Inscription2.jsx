import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import connexion from "../../assets/connexion.png";
import phoneIcon from "../../assets/Phone.png";
import Account from "../../assets/Account.png";
import emailIcon from "../../assets/Email.png";
import { api } from "../../api/api";
import passwordIcon from "../../assets/Password.png";
import Notification from "../notification/Notification";
import { useEffect } from "react";
import AiBot from "../bot/AiBot";
import ChatbotPopup from "../bot/ChatbotPopup";
export default function Example() {
  const naviate = useNavigate("");
  const [msg, setMessage] = useState("");
  const [type, setType] = useState("");
  const [notifVisible, setNotifVisible] = useState(false);
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handelChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  useEffect = () => {
    window.scroll(0, 0);
  };

  const close = () => {
    setNotifVisible(false);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.Registre(user);
      console.log("reponse", response);
      if (response.status === 200) {
        naviate("/");
        setNotifVisible(true);
        setMessage("Registration successful! You can now log in.");
        setType("success");
        setTimeout(close, 1000);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Registration ");
      setType("warning");
      setNotifVisible(true);
      setTimeout(close, 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen sm:flex-row mt-12">
      <AiBot onChatbotClick={() => setFormVisible(true)} />

      <div
        className="w-full sm:w-1/2 bg-cover relative"
        style={{ backgroundImage: `url(${connexion})` }}
      >
        <div className="absolute top-0 left-0 p-4 text-white text-5xl font-bold hidden sm:block mt-4">
          Innovez l'achat <br />
          et la vente
          <br /> auto
        </div>
      </div>

      <div className="w-full sm:w-1/2 px-6 py-10 lg:px-8 bg-white">
        {notifVisible ? <Notification message={msg} type={type} /> : null}

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-20 mt-0"
            src={logo1}
            alt="Your Company"
          />

          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inscrivez-vous pour commencer
          </h2>
          <h2 className="mt-1 text-center text-sm text-gray-600 leading-4 mb-4">
            Entrez vos informations pour continuer
          </h2>
        </div>

        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6 sm:items-center"
            action="#"
            method="POST"
            onSubmit={handelSubmit}
          >
            <div className="relative">
              <input
                onChange={handelChange}
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-12 text-gray-900 focus:ring-2 focus:ring-indigo-600 placeholder:text-gray-400 sm:text-sm sm:leading-5"
                placeholder="Numéro de téléphone"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={phoneIcon} alt="Phone Icon" className="h-5 w-5" />
              </div>
            </div>

            <div className="relative">
              <input
                onChange={handelChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border border-gray-300 pl-10 py-2 px-12 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-5"
                placeholder="Email"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={emailIcon} alt="Email Icon" className="h-5 w-5" />
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <input
                  onChange={handelChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-12 text-gray-900 focus:ring-2 focus:ring-indigo-600 placeholder:text-gray-400 sm:text-sm sm:leading-5"
                  placeholder="Nom"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src={Account}
                    alt="First Name Icon"
                    className="h-5 w-5"
                  />
                </div>
              </div>

              <div className="flex-1 relative">
                <input
                  onChange={handelChange}
                  id="surname"
                  name="surname"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border border-gray-300 py-2 px-12 text-gray-900 focus:ring-2 focus:ring-indigo-600 placeholder:text-gray-400 sm:text-sm sm:leading-5"
                  placeholder="Prénom"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src={Account} alt="Last Name Icon" className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                onChange={handelChange}
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-12 text-gray-900 focus:ring-2 focus:ring-indigo-600 placeholder:text-gray-400 sm:text-sm sm:leading-5"
                placeholder="Mot de passe"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  src={passwordIcon}
                  alt="Password Icon"
                  className="h-5 w-5"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-12 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline"
              >
                Créer un compte
              </button>
            </div>
          </form>

          <div className="mt-1 text-center text-sm text-gray-500">
            Vous avez déjà un compte?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 no-underline"
            >
              Connectez-vous
            </a>
          </div>
        </div>
      </div>
      {formVisible && (
        <ChatbotPopup
          onClose={() => setFormVisible(false)}
          onSubmit={handelSubmit}
        />
      )}
    </div>
  );
}
