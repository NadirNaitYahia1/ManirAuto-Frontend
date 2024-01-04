import React, { useState, useEffect } from "react";
import imgPhone from "../../assets/Phone.png";
import location from "../../assets/Location.png";
const AdvertisementViewer = ({ data, setData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log(data);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/getCars/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.log("data", result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data?.length) {
    return <p>Loading...</p>;
  }

  const numberElement = 9;
  const lengthData = data.length;
  const nbrPage = Math.ceil(lengthData / numberElement);
  const lastIndex = currentPage * numberElement;
  const firstIndex = lastIndex - numberElement;
  const currentData = data.slice(firstIndex, lastIndex);
  const numbers = [...Array(nbrPage + 1).keys()].slice(1);

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < nbrPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="cars mx-auto mt-5 md:ms-4 basis-4/5">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3">
        {currentData.map((car, index) => (
          <div
            key={index}
            className="shadow-[0px_2px_3px_0px_#7A63F0] pb-4 rounded-[15px] border border-solid border-gray-300 border-opacity-80"
          >
            <div className="flex justify-center mt-3">
              {/* Affichage de l'image */}
              <img
                className="w-full h-auto rounded-t-lg"
                src={car.image}
                alt="car-image"
              />
            </div>

            <div className="flex mt-3">
              {/* Affichage du titre */}
              <p className="text-base font-bold tracking-normal">
                {car.mark} {car.model} {car.annee}
              </p>
            </div>

            <div
              className="options grid gap-0"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                padding: "5px",
                borderRadius: "15px",
              }}
            >
              {/* Attribute prix */}
              {car.prix && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    {car.prix}DA
                  </p>
                </div>
              )}

              {/* Attribute kilometrage */}
              {car.kilometrage && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    {car.kilometrage}KM
                  </p>
                </div>
              )}

              {/* Attribute boitevitesse */}
              {car.boitevitesse && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    Boîte de vitesse: {car.boitevitesse}
                  </p>
                </div>
              )}

              {car.airbag && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px", // Optional: Add some spacing between boxes
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0", // Remove default margin for <p> element
                    }}
                  >
                    airbag
                  </p>
                </div>
              )}
              {car.climatisation && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    climatisation
                  </p>
                </div>
              )}
              {car.nombrePortes > 0 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    {car.nombrePortes}portes
                  </p>
                </div>
              )}
              {car.puissanceFiscale > 0 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    {car.puissanceFiscale}
                  </p>
                </div>
              )}
              {car.energie !== "" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    {car.energie}
                  </p>
                </div>
              )}
              {car.couleur !== "" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    {car.couleur}
                  </p>
                </div>
              )}
              {car.abd && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    abs
                  </p>
                </div>
              )}
            </div>
            {/* Additional description without a box */}
            {car.description && (
              <div className="col-span-2 p-2">
                <p className="text-black text-base font-normal tracking-normal">
                  {car.description}
                </p>
              </div>
            )}
            <div className="mt-4 flex items-center justify-between mx-2">
              <img src={imgPhone} alt="img-phone" className="h-10 w-10 mr-2" />
              <p className="text-phoneColorText text-base font-normal tracking-normal">
                {car.phone}
              </p>
              <img src={location} alt="img-phone" className="h-8 w-7" />
              <p className="text-phoneColorText text-base font-normal tracking-normal mr-4">
                {car.wilaya}
              </p>
              <button className="bg-userButton rounded-[15px] px-1 py-2 text-userButtonText hover:bg-blue-800">
                Voir Plus
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination flex justify-center mt-5">
        <button
          className="button-pagination-prev-next button-pagination"
          onClick={prev}
        >
          Prev
        </button>
        {numbers.map((number, index) => (
          <button
            key={index}
            className="mx-1 button-pagination"
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="button-pagination-prev-next button-pagination"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdvertisementViewer;
