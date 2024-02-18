import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { showConfirmModal } from 'actions/global';
import { deleteIndividual } from 'services/individual.service';
import DataTable from 'components/shared/DataTable/index';
import { Permissoin, AffiliateUnitLevelOptions } from '../utils/constants';

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
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
        formatter: (_, index) => <span className='bw_text_wrap'>{index + 1}</span>,
      },
      {
        header: 'Họ và tên',
        classNameHeader: 'bw_text_center',
        accessor: 'individual_fullname',
      },
      {
        header: 'Số điện thoại',
        classNameHeader: 'bw_text_center',
        accessor: 'phone_number',
      },
      {
        header: 'Số CCCD',
        classNameHeader: 'bw_text_center',
        accessor: 'id_number',
      },
      {
        header: 'Địa chỉ',
        classNameHeader: 'bw_text_center',
        accessor: 'home_address',
      },
      {
        header: 'Nơi công tác',
        classNameHeader: 'bw_text_center',
        accessor: 'work_name',
      },
      {
        header: 'Người tạo',
        accessor: 'created_fullname',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
      },
      {
        header: 'Ngày tạo',
        accessor: 'created_at',
        classNameHeader: 'bw_text_center',
        classNameBody: 'bw_text_center',
      },
    ],
    [],
  );

  const handleDelete = useCallback(
    async (Id) => {
      await deleteIndividual(Id);
      onRefresh();
    },
    [onRefresh],
  );

  const actions = useMemo(() => {
    return [
      {
        globalAction: true,
        icon: 'fi fi-rr-add',
        type: 'success',
        content: 'Thêm mới',
        permission: Permissoin.ADD,
        onClick: () => window._$g.rdr(`individual/add`),
      },
      {
        icon: 'fi fi-rr-edit',
        color: 'blue',
        title: 'Sửa',
        permission: Permissoin.EDIT,
        onClick: (p) => {
          window._$g.rdr(`individual/edit/${p?.individual_id}`);
        },
      },
      {
        icon: 'fi fi-rr-eye',
        color: 'green',
        title: 'Chi tiết',
        permission: Permissoin.VIEW,
        onClick: (p) => {
          window._$g.rdr(`individual/detail/${p?.individual_id}`);
        },
      },
      {
        icon: 'fi fi-rr-trash',
        color: 'red',
        title: 'Xóa',
        permission: Permissoin.DELETE,
        onClick: (_, d) =>
          dispatch(
            showConfirmModal(['Bạn có thực sự muốn xóa?', 'Bạn sẽ mất dữ liệu này và các dữ liệu liên quan.'], () =>
              handleDelete([_.individual_id]),
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
