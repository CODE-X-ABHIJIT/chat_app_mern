import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-mern-pkem.onrender.com",
  withCredentials: true,
});
