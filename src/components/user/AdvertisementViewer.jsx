import React, { useState, useEffect } from "react";
import imgPhone from "../../assets/Phone.png";
import location from "../../assets/Location.png";
import { useNavigate } from "react-router-dom";
import carImg from '../../assets/carImg.jpg'
const AdvertisementViewer = ({ data, setData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  
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

  
  const pathDettails = (id)=>{
    navigate(`/advertisement-detail/${id}`)
  }

  return (
    <div className="cars mx-auto mt-5 md:ms-4 basis-4/5">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3">
        {currentData.map((car, index) => (
          <div
          key={index}
          className="shadow-[0px_2px_3px_0px_#7A63F0] pb-4 rounded-[15px] border border-solid border-gray-300 border-opacity-80"
          >
          {console.log(car.image)}
            <div className="flex justify-center mt-3">
              {/* Affichage de l'image */}
              <img
                className="w-full h-auto rounded-t-lg"
                src={carImg}
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

            <div className="mt-4 flex items-center   ">
              <img src={imgPhone} alt="img-phone" className="h-10 w-10 " />
              <p className="text-phoneColorText text-base font-normal tracking-normal">
                {car.phone}
              </p>
              <img src={location} alt="img-phone" className="h-8 w-7 ml-10" />
              <p className="text-phoneColorText text-base font-normal tracking-normal mr-4">
                {car.wilaya}
              </p>
    
            </div>
            {car.prix && (
                <div  
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "5px",
                    borderRadius: "15px",
                    margin: "5px",
                  }}
                >
                  <p
                    style={{
                      color: "BLue",
                      fontSize: "19px",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    {car.prix}DA
                  </p>
                  <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 border border-blue-700 rounded-[15px]"
  onClick={() => pathDettails(car.idCar)}
  style={{ fontSize: '14px', height: '40px', width: '120px' }}
>
  Voir Plus
</button>

                </div>
              )}

          </div>
        ))}

      </div>

      <div className="pagination flex justify-center mt-5">
        <button
          className="button-pagination-prev-next button-pagination mx-1"
          onClick={prev}
        >
          Prev
        </button>
        {numbers.map((number, index) => (
          <button
            key={index}
            className={currentPage === number ? " button-pagination-active button-pagination mx-1 " : "active button-pagination-number button-pagination mx-1 "}
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
