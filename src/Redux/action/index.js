 export const registerUser = (userData) => {
    return {
      type: "REGISTER_USER",
      payload: userData,
    };
  };
  
  export const loginUser = (userData) => {
    return {
      type: "LOGIN_USER",
      payload: userData,
    };
  };
  
  

  