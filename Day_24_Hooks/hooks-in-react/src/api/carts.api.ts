import axios from "axios";

export const getCarts = async () => {
  const response = await axios.get("https://dummyjson.com/carts");
  return response.data;
};
