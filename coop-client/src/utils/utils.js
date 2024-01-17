import env from "configs/env";

export const cdnPath = (path) => (path ? env.BASE_URL + path : "");
export const parseJson = (json) => {
  try {
    return JSON.parse(json || null);
  } catch (error) {
    console.error(error?.message);
    return null;
  }
};

export const mappingObject = (sentence) => {
  sentence = sentence?.replaceAll("Car", "ô tô");
  sentence = sentence?.replaceAll("Motorcycle", "xe máy");
  sentence = sentence?.replaceAll("Truck", "xe tải");
  sentence = sentence?.replaceAll("Bus", "xe buýt");
  sentence = sentence?.replaceAll("Bicycle", "xe đạp");
  return sentence;
};
