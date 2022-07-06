import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

//signup user
const signup = async (userData) => {
  const response = await axios.post(API_URL + "signup", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const login = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "login", userData, config);
  console.log(response);
  console.log(response.data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  logout,
  login,
};

export default authService;
