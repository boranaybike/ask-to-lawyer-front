import axios from "axios";
const API_URL = "https://localhost:7057/api";

const axiosInstance = axios.create({baseURL: API_URL});


axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default axiosInstance;

