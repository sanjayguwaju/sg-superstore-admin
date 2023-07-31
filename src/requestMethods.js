import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
let TOKEN = "";

// Retrieve the token from localStorage if it exists
if (localStorage.getItem("persist:root")) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

// Axios interceptor to update the token before each request is sent
userRequest.interceptors.request.use(
  (config) => {
    // Retrieve the latest token from localStorage if it exists
    const latestToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken;
    
    // Update the 'Authorization' header with the latest token
    if (latestToken) {
      config.headers["Authorization"] = `Bearer ${latestToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
