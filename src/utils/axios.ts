import axios from "axios";

// const API_URL = import.meta.env.VITE_BASE_URL;

const Api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default Api;
