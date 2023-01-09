import axios from "axios";
import { requestURL } from "./request";
import config from "./config";

export const register = async (userData) => {
  const axiosResponse = await axios.post(
    requestURL("/api/users/register"),
    userData
  );

  return axiosResponse.data;
};

export const login = async (userData) => {
  const axiosResponse = await axios.post(
    requestURL("/api/users/login", { withCredentials: true }),
    userData
  );

  return axiosResponse.data;
};

export const me = async () => {
  const axiosResponse = await axios.get(requestURL("/api/users/me"), config);

  return axiosResponse.data;
};
