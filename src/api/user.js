import axios from "axios";
import { requestURL } from "./request";

export const register = async (userData) => {
  const axiosResponse = await axios.post(
    requestURL("/api/users/register"),
    userData
  );

  return axiosResponse.data;
};

export const login = async (userData) => {
  const axiosResponse = await axios.post(
    requestURL("/api/users/login"),
    userData
  );

  return axiosResponse.data;
};
