import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import Table from '../components/Table';
import { getList, exportExcel as exportGift } from 'services/special-day.service';
import { defaultPaging, defaultParams, showToast } from 'utils/helpers';
import moment from 'moment';
import usePagination from 'hooks/usePagination';

const ListPage = () => {
  const [params, setParams] = useState(defaultParams);
  const [dataList, setDataList] = useState(defaultPaging);
  const [loading, setLoading] = useState(true);

  const { items, itemsPerPage, page, totalItems, totalPages, onChangePage } = usePagination({
    data: dataList,
    itemsPerPage: defaultParams.limit,
  });

  const getData = useCallback(() => {
    setLoading(true);
    getList(params)
      .then(setDataList)
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  useEffect(getData, [getData]);

  const exportExcel = () => {
    exportGift()
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response?.data]));
        const link = document.createElement('a');
        link.href = url;
        const configDate = moment().format('DDMMYYYY');
        link.setAttribute('download', `special_day_${configDate}.xlsx`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        showToast.error('Lỗi xuất tập tin.');
      });
  };

  return (
    <div class='cb_main_wrapp'>
      <Table
        onChangePage={onChangePage}
        exportExcel={exportExcel}
        data={items}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        page={page}
        totalItems={totalItems}
        loading={loading}
        onRefresh={getData}
      />
    </div>
  );
};

export default ListPage;
