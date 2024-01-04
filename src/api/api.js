
const baseUrl ='http://localhost:8000/'

const LogIn = async (user) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
  
    try {
      const response = await fetch(baseUrl+'api/login/', fetchOptions);  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        return response;    
      }
    } catch (error) {
      // Handle errors
      console.error('Fetch error:', error);
      throw error;  
    }
  };
const Registre = async (user) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
  
    try {
      const response = await fetch(baseUrl+'api/register/', fetchOptions);  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        return response;    
      }
    } catch (error) {
      // Handle errors
      console.error('Fetch error:', error);
      throw error;  
    }
  };
  async function addCar(carData, token) {
    try {
      const response = await fetch(baseUrl+'api/addCar/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(carData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Fetch error: ${error.message}`);
    }
  }
  


  const GetCarById = async (id) => {
    try {
      const response = await fetch(baseUrl + `api/getCarById/${id}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Fetch error: ${error.message}`);
    }
  };


  const LogOut = async () => {
    try {
      const response = await fetch(baseUrl + 'api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Fetch error: ${error.message}`);
    }
  };
  
  export const api = {
    LogIn,
    Registre,
    addCar,
    GetCarById,
    LogOut,
  };
  