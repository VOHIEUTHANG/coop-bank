import axios from "axios";
import env from "configs/env";

const HttpRequest = () => {
  const instance = axios.create({
    baseURL: env.BASE_URL,
    timeout: 20 * 1000,
    headers: {
      "Content-Type": "application/json"
    }
  });

  instance.interceptors.response.use(
    async (response) => {
      const { data } = response;
      return Promise.resolve(data);
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default HttpRequest();
