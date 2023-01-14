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

export const editProduct = async (query, id) => {
  const axiosResponse = await axios.post(
    requestURL(`/api/product/edit?stock=${query}&id=${id}`),
    {},
    config
  );

  return axiosResponse.data;
};

export const editProductConfig = async (prop, query, id) => {
  const axiosResponse = await axios.post(
    requestURL(`/api/product/edit?prop=${prop}&change=${query}&id=${id}`),
    {},
    config
  );

  return axiosResponse.data;
};

export const searchProducts = async (query, id) => {
  let additional = "";
  if (id) {
    additional = `&collection=${id}`;
  }
  const axiosResponse = await axios.get(
    requestURL(`/api/products?search=${query}` + additional),
    config
  );

  return axiosResponse.data;
};

export const filterProducts = async (query, id) => {
  let additional = "";
  if (id) {
    additional = `&collection=${id}`;
  }
  const axiosResponse = await axios.get(
    requestURL(`/api/products?filter=${query}` + additional),
    config
  );

  return axiosResponse.data;
};

export const sortProducts = async (query, id) => {
  let additional = "";
  if (id) {
    additional = `&collection=${id}`;
  }
  const axiosResponse = await axios.get(
    requestURL(`/api/products?sort=${query}` + additional),
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
export const viewProduct = async (slug) => {
  const axiosResponse = await axios.get(
    requestURL(`/api/product/${slug}`),
    config
  );

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
