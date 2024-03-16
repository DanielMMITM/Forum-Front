import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
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
