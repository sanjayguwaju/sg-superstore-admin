import axios from "axios";

const BACKEND_URL = "http://localhost:5000/api/";
export const API_URL = `${BACKEND_URL}/api/users/`;

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL + "/auth/register", userData);
  return response.data;
};

// Add New User
const addNewUser = async (userData) => {
  const response = await axios.post(API_URL + "/users/adduser", userData);
}
// Delete User
const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + "/users/" + id);
  return response.data;
};

// Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "/auth/login", userData);
  return response.data;
};

// Logout User
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};


const authService = {
  register,
  login,
  logout,
  addNewUser,
  deleteUser,
};

export default authService;



// yesko kaam aahile request methods le gariraaako xa