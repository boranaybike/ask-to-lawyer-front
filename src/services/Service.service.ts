import axios from "axios";
import router from "@/router";
import tokenService from "./Token.service";

const API_URL = "https://localhost:7057/api";
const axiosInstance = axios.create({baseURL: API_URL});

axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${tokenService.getToken()}`;
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.request.use(
    (response) => response,
    (error) => { 
      const originalRequest = error.config;

      if (
        error.response.status === 401 &&
        originalRequest.url !== `${API_URL}/users/login`
      ) {
        router.push('/login');
        return Promise.reject(error);
      }
  
      return Promise.reject(error);
    }
  );

export default axiosInstance;
