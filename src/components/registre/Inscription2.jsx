import React from "react";
import logo1 from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import connexion from "../../assets/connexion.png";
import phoneIcon from "../../assets/Phone.png";
import Account from "../../assets/Account.png";
import emailIcon from "../../assets/Email.png";
import { useEffect } from "react";

import passwordIcon from "../../assets/Password.png";
import check from "../../assets/check.png";

export default function Example() {

  useEffect =()=>{
    window.scroll(0,0)
  }


  return (
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
          <form className="space-y-6 sm:items-center" action="#" method="POST">
            <div className="relative">
              <input
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
                  id="firstName"
                  name="firstName"
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
                  id="lastName"
                  name="lastName"
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

            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border border-gray-300 py-2 px-12 text-gray-900 focus:ring-2 focus:ring-indigo-600 placeholder:text-gray-400 sm:text-sm sm:leading-5"
                placeholder="Email"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={check} alt="Email Icon" className="h-5 w-5" />
              </div>
            </div>

            <div>
              <Link to="/annonce1 " className="no-underline">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-12 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline"
                >
                  Créer un compte
                </button>
              </Link>
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
    </div>
  );
}
