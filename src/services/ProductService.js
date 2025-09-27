import { get } from "./Axios";
const getProducts = async (payload) => {
  return await get("products", payload);
};

const getProductDetail = async (id) => {
  return await get(`products/${id}`);
};

export { getProducts, getProductDetail };
