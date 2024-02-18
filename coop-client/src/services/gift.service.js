import httpClient from 'utils/httpClient';

const path = '/gift';

export const getList = (params = {}) => {
  return httpClient.get(path, { params });
};

export const getById = (id) => {
  return httpClient.get(`${path}/${id}`);
};
export const create = (params) => {
  return httpClient.post(path, params);
};

export const update = (params) => {
  return httpClient.patch(path, params);
};

export const deleteGift = (id) => {
  return httpClient.delete(`${path}/${id}`);
};

export const exportExcel = (params) => {
  const header = {
    responseType: `blob`,
  };
  return httpClient.get(`${path}/export-excel`, { params, ...header });
};
