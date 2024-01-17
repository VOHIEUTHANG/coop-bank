import HttpRequest from "helper/request";

const upload = async (data) => {
  return HttpRequest.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

const uploadData = async (data) => {
  return HttpRequest.post("/upload-data", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

const predict = async (data) => {
  return HttpRequest.post("/predict", data);
};

const restartServer = async (data) => {
  return HttpRequest.post("/restart", data);
};

const getDataSets = async (params) => {
  return HttpRequest.get("/datasets", params);
};

const getPredictResult = async (params) => {
  return HttpRequest.get("/predict-result", params);
};

const createPredictResult = async (body) => {
  return HttpRequest.post("/predict-result", body);
};

export default {
  upload,
  predict,
  restartServer,
  getDataSets,
  getPredictResult,
  createPredictResult,
  uploadData
};
