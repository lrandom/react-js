import { get } from "./Axios";
const getProducts = async (payload) => {
  return await get("products", payload);
};

export { getProducts };
