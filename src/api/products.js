import axios from "axios";
import { requestURL } from "./request";
import config from "./config";

// view all of my products
export const myProducts = async (userData) => {
  const axiosResponse = await axios.get(
    requestURL("/api/products/all?organize=false"),
    config
  );

  return axiosResponse.data;
};

export const myOrganizedProducts = async (userData) => {
  const axiosResponse = await axios.get(
    requestURL("/api/products/all?organize=true"),
    config
  );
  return axiosResponse.data;
};

// view a single product
export const viewProduct = async () => {
  const axiosResponse = await axios.get(requestURL("/api/product/:id"), config);

  return axiosResponse.data;
};

// add a single product
export const addProduct = async (userData) => {
  const axiosResponse = await axios.post(
    requestURL("/api/product"),
    userData,
    config
  );

  return axiosResponse.data;
};

// delete a single product
export const deleteProduct = async (userData) => {
  const axiosResponse = await axios.delete(
    requestURL("/api/product/:id", { withCredentials: true }),
    userData
  );

  return axiosResponse.data;
};
