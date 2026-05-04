import axios from "axios";

export const getProducts = async () => {
  return await axios.get("https://dummyjson.com/products");
};

export const getProductById = async (id: number) => {
  return await axios.get(`https://dummyjson.com/products/${id}`);
};
