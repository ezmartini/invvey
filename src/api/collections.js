import axios from "axios";
import { requestURL } from "./request";
import config from "./config";

// view all of my collections
export const myCollections = async (userData) => {
  const axiosResponse = await axios.get(
    requestURL("/api/collections"),
    config,
    userData
  );

  return axiosResponse.data;
};

export const filterCollections = async (query) => {
  const axiosResponse = await axios.get(
    requestURL(`/api/collections?filter=${query}`),
    config
  );

  return axiosResponse.data;
};

export const searchCollections = async (query) => {
  const axiosResponse = await axios.get(
    requestURL(`/api/collections?search=${query}`),
    config
  );

  return axiosResponse.data;
};

export const sortCollections = async (query) => {
  const axiosResponse = await axios.get(
    requestURL(`/api/collections?sort=${query}`),
    config
  );

  return axiosResponse.data;
};

// view a single collection
export const viewCollection = async (slug) => {
  const axiosResponse = await axios.get(
    requestURL(`/api/collection/${slug}`),
    config
  );

  return axiosResponse.data;
};

// add a single collection
export const addCollection = async (userData) => {
  const axiosResponse = await axios.post(
    requestURL("/api/collection"),
    userData,
    config
  );

  return axiosResponse.data;
};

// delete a single collection
export const deleteCollection = async (userData) => {
  const axiosResponse = await axios.delete(
    requestURL("/api/collection/:id", { withCredentials: true }),
    userData
  );

  return axiosResponse.data;
};
