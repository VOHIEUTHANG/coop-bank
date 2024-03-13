import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteAffiliateUnit } from 'services/affiliate-unit.service';
import DataTable from 'components/shared/DataTable/index';
import { AffiliateUnitLevelOptions } from '../utils/constants';

const RepresentativeTable = ({
  loading,
  data,
  totalPages,
  itemsPerPage,
  page,
  totalItems,
  onChangePage,
  onRefresh,
}) => {
  const dispatch = useDispatch();
  const columns = useMemo(
    () => [
      {
        header: 'STT',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
        formatter: (_, index) => <span className='cb_text_wrap'>{index + 1}</span>,
      },
      {
        header: 'Tên người đơn vị',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_name',
      },
      {
        header: 'Mã đơn vị',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_code',
      },
      {
        header: 'Địa chỉ đơn vị',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_address',
      },
      {
        header: 'Cấp đơn vị',
        classNameHeader: 'cb_text_center',
        accessor: 'affiliate_unit_level',
      },
      {
        header: 'Người tạo',
        accessor: 'created_fullname',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
      },
      {
        header: 'Ngày tạo',
        accessor: 'created_at',
        classNameHeader: 'cb_text_center',
        classNameBody: 'cb_text_center',
      },
    ],
    [],
  );

  const handleDelete = useCallback(
    async (Id) => {
      await deleteAffiliateUnit(Id);
      onRefresh();
    },
    [onRefresh],
  );

  const actions = useMemo(() => {
    return [
      {
        globalAction: true,
        icon: 'ti-plus',
        type: 'success',
        content: 'Thêm mới',
        onClick: () => window._$g.rdr(`affiliate-unit/add`),
      },
      {
        icon: 'ti-write',
        color: 'blue',
        title: 'Sửa',
        onClick: (p) => {
          window._$g.rdr(`affiliate-unit/edit/${p?.affiliate_unit_id}`);
        },
      },
      {
        icon: 'ti-eye',
        color: 'green',
        title: 'Chi tiết',
        onClick: (p) => {
          window._$g.rdr(`affiliate-unit/detail/${p?.affiliate_unit_id}`);
        },
      },
      {
        icon: 'fi ti-trash',
        color: 'red',
        title: 'Xóa',
        onClick: (_, d) =>
          dispatch(
            showConfirmModal(['Bạn có thực sự muốn xóa?', 'Bạn sẽ mất dữ liệu này và các dữ liệu liên quan.'], () =>
              handleDelete([_.affiliate_unit_id]),
            ),
          ),
      },
    ];
  }, [dispatch, handleDelete]);

  return (
    <DataTable
      loading={loading}
      columns={columns}
      data={data}
      actions={actions}
      totalPages={totalPages}
      itemsPerPage={itemsPerPage}
      page={page}
      totalItems={totalItems}
      onChangePage={onChangePage}
    />
  );
};

export default RepresentativeTable;
