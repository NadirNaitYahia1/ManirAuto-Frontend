
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
      const response = await fetch(baseUrl+'api/loginUser', fetchOptions);  
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
      const response = await fetch(baseUrl+'api/registerUser', fetchOptions);  
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
const AddAnnonce = async (annonce) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(annonce),
    };
  
    try {
      const response = await fetch(baseUrl+'annonce/addAnnouncement', fetchOptions);  
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




  
  export const api = {
    LogIn,
    Registre,
    AddAnnonce
  };
  