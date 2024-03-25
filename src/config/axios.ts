import axios from "axios";
export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  },

  timeout: 5000,
});

export function getToken() {
  const token = localStorage.getItem("token");
  axiosClient.defaults.headers["Authorization"] = `bearer ${token}`;
}
