import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-mern-pkem.onrender.com" : "http://localhost:5001",
  withCredentials: true,
});
