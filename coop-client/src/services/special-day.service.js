import httpClient from 'utils/httpClient';

const path = '/special-day';

export const getList = (params = {}) => {
  return httpClient.get(path, { params });
};

export const exportExcel = (params) => {
  const header = {
    responseType: `blob`,
  };
  return httpClient.get(`${path}/export-excel`, { params, ...header });
};

export const getNotifyCount = (params = {}) => {
  return httpClient.get(path + '/notify-count', { params });
};
