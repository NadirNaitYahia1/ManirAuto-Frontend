import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const navigation = [
  { name: "Acceuil", href: "#", current: true },
  { name: "Annonces", href: "#", current: false },
  { name: "Apropos", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the toggle button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define a breakpoint for medium screens
  const mediumScreenBreakpoint = 768;

  // Listen to the window resize event
  window.addEventListener("resize", () => {
    if (window.innerWidth < mediumScreenBreakpoint) {
      setIsMediumScreen(true);
    } else {
      setIsMediumScreen(false);
    }
  });

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/login");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white shadow fixed w-full z-10 top-0 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <style>
          {`
            /* Style for the links */
            .nav-link {
              text-decoration: none;
              color: #333; /* Default color for links */
              
              
            }

            /* Underline effect for the links on hover */
            .nav-link:hover {
              border-bottom: 2px solid #8b5cf6; /* Bottom border on hover */
            }
          `}
        </style>
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
           <a href="/" className="cursor-pointer">
            <img className="h-14 w-14" src={logo} alt="Your Logo" />
            </a>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex items-center justify-center space-x-20">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "px-1 py-2 nav-link font-semibold",
                    item.current ? "text-purple-600" : "text-gray-700",
                    "rounded-md text-base" // Adjust text size here
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
              {isMediumScreen ? null : ( // Button only for full screen
                <button
                  className="bg-purple-600 text-white rounded-md px-2 py-2"
                  onClick={handleAddClick}
                >
                  AjouterAnnonce
                </button>
              )}
              {isMediumScreen ? null : ( // Button only for full screen
                <button
                  className="bg-blue-600 text-white rounded-md px-2 py-2 hover:bg-blue-800"
                  onClick={handleLoginClick}
                >
                  Connexion
                </button>
              )}
            </div>
          </div>

          {isMediumScreen && ( // Display the menu icon on medium screens
            <div className="sm:hidden">
              <button
                className="text-purple-600 focus:outline-none"
                onClick={toggleMenu}
              >
                {/* Menu Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      {isMenuOpen && isMediumScreen && (
        // Display the menu links when the menu is open and on medium screens
        <div className="sm:hidden">
          <Disclosure as="nav" className="bg-white">
            {({ open }) => (
              <>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "block px-3 py-2 nav-link font-semibold",
                        item.current ? "text-purple-600" : "text-gray-700",
                        "rounded-md text-base"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    className="bg-purple-600 text-white rounded-md px-3 py-2" // Button in menu
                  >
                    ajouter annonce
                  </button>
                </div>
              </>
            )}
          </Disclosure>
        </div>
      )}
    </div>
  );
}
