import env from "configs/env";
import { parseJson } from "utils/utils";

const LocalStorage = () => {
  const STORAGE_KEY = env.STORAGE_KEY;
  return {
    get: (key) => {
      const data = parseJson(localStorage.getItem(STORAGE_KEY));
      return data?.[key];
    },
    set: (key, data) => {
      const parentData = parseJson(localStorage.getItem(STORAGE_KEY)) || {};
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...parentData,
          [key]: data
        })
      );
    }
  };
};

export default LocalStorage();
