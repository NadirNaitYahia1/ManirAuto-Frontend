
const baseUrl ='http://localhost:8000/api/'

const LogIn = async (user) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
  
    try {
      const response = await fetch(baseUrl+'loginUser', fetchOptions);  
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
  };
  