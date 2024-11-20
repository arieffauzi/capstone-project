import axios from "axios";
import Cookies from "js-cookie";


export const capstoneAxios = (serverToken?: string) => {
  const clientToken = Cookies.get("capstone-cookie");
  const headers = {
    Authorization: `Bearer ${serverToken ? serverToken : clientToken}`,
  };
  const axiosInterceptor = axios.create({ headers });
  axiosInterceptor.interceptors.request.use(
    async (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );

  return axiosInterceptor;
};
