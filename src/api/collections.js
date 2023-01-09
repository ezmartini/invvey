import axios from "axios";
import { requestURL } from "./request";

// view all of my collections
export const myCollections = async (userData) => {
  const axiosResponse = await axios.get(
    requestURL("/api/collections"),
    userData
  );

  return axiosResponse.data;
};

// view a single collection
export const viewCollection = async (userData) => {
  const axiosResponse = await axios.get(
    requestURL("/api/collection/:id", { withCredentials: true }),
    userData
  );

  return axiosResponse.data;
};

// add a single collection
export const addCollection = async (userData) => {
  const axiosResponse = await axios.post(
    requestURL("/api/collection", { withCredentials: true }),
    userData
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
