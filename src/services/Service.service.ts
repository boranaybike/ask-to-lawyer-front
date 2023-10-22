import axios from "axios";
import router from "@/router";
import tokenService from "./token";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

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
      originalRequest.url !== `${process.env.VUE_APP_API_URL}/customer-register`
    ) {
      router.push('/customer-register');
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
