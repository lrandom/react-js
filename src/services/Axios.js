import axios from "axios";

const Axios = axios.create({
  baseURL: "http://165.22.57.105/api/v1/",
  timeout: 50000,
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const get = async (url, params) => {
  const res = await Axios.get(url, { params });
  return res.data;
};

const post = async (url, data) => {
  const res = await Axios.post(url, data);
  return res.data;
};

export { Axios, get, post };
