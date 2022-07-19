import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

//signup user
const signup = async (userData) => {
  const response = await axios.post(API_URL + "signup", userData);
  if (response.data) {
    localStorage.setItem("ArgentBank", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("ArgentBank", JSON.stringify(response.data));
  }

  return response.data;
};

const profile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "profile", profileData, config);

  return response.data.body;
};

const profileUpdate = async (profileUpdateData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + "profile",
    profileUpdateData,
    config
  );

  return response.data.body;
};

//logout user
const logout = () => {
  localStorage.removeItem("ArgentBank");
  localStorage.removeItem("persist:root");
};

const authService = {
  signup,
  profile,
  profileUpdate,
  logout,
  login,
};

export default authService;
