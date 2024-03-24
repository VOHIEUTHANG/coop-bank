import httpClient from 'utils/httpClient';

const path = '/affiliate-unit';

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

export const deleteAffiliateUnit = (id) => {
  return httpClient.delete(`${path}/${id}`);
};

export const getOptions = (params = {}) => {
  return httpClient.get(path + '/options', { params });
};

export const exportForm = (affiliateId, params = {}) => {
  const header = {
    responseType: `blob`,
  };

  return httpClient.get(path + `/export-form/${affiliateId}`, { params, ...header });
};

export const exportExcel = (params) => {
  const header = {
    responseType: `blob`,
  };
  return httpClient.get(`${path}/export-excel`, { params, ...header });
};
