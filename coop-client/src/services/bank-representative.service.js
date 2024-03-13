import httpClient from 'utils/httpClient';

const path = '/bank-representative';

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

export const deleteBankRepresentative = (id) => {
  return httpClient.delete(`${path}/${id}`);
};

export const getOptions = (params = {}) => {
  return httpClient.get(path + '/options', { params });
};

export const getListByUser = (params = {}) => {
  return httpClient.get(path + '/list-by-user', { params });
};
