const getInitialUser = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };
  
  const userReducer = (state = getInitialUser(), action) => {
    switch (action.type) {
      case "REGISTER_USER":
        localStorage.setItem("user", JSON.stringify(action.payload));
        return action.payload;
  
      case "LOGIN_USER":
        return action.payload;
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  