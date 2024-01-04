import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import connexion from "../../assets/connexion.png";
import emailIcon from "../../assets/Account.png";
import passwordIcon from "../../assets/Password.png";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Notification from "../notification/Notification";
import AiBot from "../bot/AiBot";
import ChatbotPopup from "../bot/ChatbotPopup";

const Connexion = ({ annonce, setAnnonce,loged,setLoged }) => {
  const [notifVisible, setNotifVisible] = useState(false);
  const [msg, setMessage] = useState("");
  const [type, setType] = useState("");
  const [dataPerson, setDataPerson] = useState({
    email: "",
    password: "",
  });

  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const close = () => {
    setNotifVisible(false);
  };

  const handelChange = (e) => {
    setDataPerson({ ...dataPerson, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.LogIn(dataPerson);
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        console.log("data", data);
        localStorage.setItem("token", data.jwt);
        
        setLoged(true);

        navigate("/");
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
    <div>
      <AiBot onChatbotClick={() => setFormVisible(true)} />
      <div className="flex flex-col min-h-screen sm:flex-row mt-12">
        <div
          className="w-full sm:w-1/2 bg-cover relative"
          style={{ backgroundImage: `url(${connexion})` }}
        >
          <div className="absolute top-0 left-0 p-4 text-white text-5xl font-bold hidden sm:block mt-4">
            Innovez l'achat <br />
            et la vente <br /> auto
          </div>
        </div>

        <div className="w-full sm:w-1/2 px-6 py-10 lg:px-8 bg-white">
          {notifVisible ? <Notification message={msg} type={type} /> : null}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* Your Logo */}
            <img className="mx-auto h-20 w-20" src={logo} alt="Your Company" />
            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Connectez-vous à votre compte
            </h2>
            <h2 className="mt-1 text-center text-sm text-gray-600 leading-4">
              Entrez vos informations pour continuer
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handelSubmit}
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src={emailIcon} alt="Email Icon" className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border border-gray-300 pl-10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email"
                  onChange={handelChange}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src={passwordIcon}
                    alt="Password Icon"
                    className="h-5 w-5"
                  />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border border-gray-300 pl-10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Mots de passe"
                  onChange={handelChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Se connecter
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Vous n'avez pas de compte?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Inscrivez-vous
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
    </div>
  );
};

export default Connexion;
