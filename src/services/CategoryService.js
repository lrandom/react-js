import { get } from "./Axios";

const getCategories = async () => {
  const res = await get("categories");
  return res;
};

export { getCategories };
