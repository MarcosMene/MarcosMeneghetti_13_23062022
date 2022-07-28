import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

//login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("ArgentBank", JSON.stringify(response.data));
  }
  return response.data;
};

//profile user
const profile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "profile", profileData, config);
  return response.data.body;
};

//profile update user
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
};

const authService = {
  profile,
  profileUpdate,
  logout,
  login,
};

export default authService;
